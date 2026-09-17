const terminalFrame = document.getElementById("terminal");
const topbar = document.getElementById("terminal-topbar");

const closeButton = document.getElementById("closeTerminal");
const minimizeButton = document.getElementById("minimizeTerminal");
const maximizeButton = document.getElementById("maximizeTerminal");

const TerminalIcon = document.getElementById("terminalIcon");

const terminalContent = document.getElementById("terminal-content");
const terminalOutput = document.getElementById("terminal-output");
const terminalInput = document.getElementById("terminal-input");

let commandHistory = [];
let historyIndex = -1;
let isDragging = false;
let offsetX = 0;
let offsetY = 0;
let isMaximized = false;
let isMinimized = false;

let previousPosition = {
    width: terminalFrame.style.width,
    height: terminalFrame.style.height,
    left: terminalFrame.style.left,
    top: terminalFrame.style.top
};

function closeTerminal() {
    terminalFrame.classList.remove("show");
    terminalFrame.classList.add("closing");

    terminalFrame.addEventListener("animationend", () => {
        terminalFrame.classList.remove("closing");
        terminalFrame.style.display = "none";
    }, { once: true });
}

function openTerminal() {
    terminalFrame.style.display = "block";

    // Force le navigateur à prendre en compte display:block
    terminalFrame.offsetHeight;

    terminalFrame.classList.remove("closing");
    terminalFrame.classList.add("show");
}

topbar.addEventListener("mousedown", (event) => {
    isDragging = true;

    const rect = terminalFrame.getBoundingClientRect();

    // Position de la souris à l'intérieur du terminal
    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;
});

document.addEventListener("mousemove", (event) => {
    if (!isDragging) return;

    const rect = terminalFrame.getBoundingClientRect();

    let newLeft = event.clientX - offsetX;
    let newTop = event.clientY - offsetY;

    // Empêche le terminal de sortir à gauche / en haut
    newLeft = Math.max(0, newLeft);
    newTop = Math.max(0, newTop);

    // Empêche le terminal de sortir à droite / en bas
    newLeft = Math.min(
        newLeft,
        window.innerWidth - rect.width
    );

    newTop = Math.min(
        newTop,
        window.innerHeight - rect.height
    );

    if (isMaximized) {
        terminalFrame.style.width = previousPosition.width;
        terminalFrame.style.height = previousPosition.height;
        isMaximized = false;
    }

    terminalFrame.style.left = `${newLeft}px`;
    terminalFrame.style.top = `${newTop}px`;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

topbar.addEventListener("dblclick", () => {
    if (!isMaximized) {
        // Sauvegarder les valeurs actuelles
        previousPosition = {
            width: terminalFrame.style.width,
            height: terminalFrame.style.height,
            left: terminalFrame.style.left,
            top: terminalFrame.style.top
        };

        // Agrandir
        terminalFrame.style.width = "100%";
        terminalFrame.style.height = "100%";
        terminalFrame.style.left = "0";
        terminalFrame.style.top = "0";

        isMaximized = true;
    } else {
        // Restaurer les anciennes valeurs
        terminalFrame.style.width = previousPosition.width;
        terminalFrame.style.height = previousPosition.height;
        terminalFrame.style.left = previousPosition.left;
        terminalFrame.style.top = previousPosition.top;

        isMaximized = false;
    }
});

closeButton.addEventListener("click", () => {
    closeTerminal();
    terminalIcon.classList.remove("active");
    isMinimized = false;
    terminalIcon.style.transform = "translateY(0) scale(1)";
});

minimizeButton.addEventListener("click", () => {
    closeTerminal();
    isMinimized = true;
});

maximizeButton.addEventListener("click", () => {
    if (!isMaximized) {
        previousPosition = {
            width: terminalFrame.style.width,
            height: terminalFrame.style.height,
            left: terminalFrame.style.left,
            top: terminalFrame.style.top
        };
        
        terminalFrame.style.width = "100%";
        terminalFrame.style.height = "100%";
        terminalFrame.style.left = "0";
        terminalFrame.style.top = "0";

        isMaximized = true;
    } else {
        terminalFrame.style.width = previousPosition.width;
        terminalFrame.style.height = previousPosition.height;
        terminalFrame.style.left = previousPosition.left;
        terminalFrame.style.top = previousPosition.top;

        isMaximized = false;
    }
});

terminalIcon.addEventListener("click", () => {
    if (terminalFrame.style.display === "none" || terminalFrame.style.display === "") {
        openTerminal();
        terminalIcon.classList.add("active");
        terminalIcon.style.transform = "translateY(-12px) scale(1.25)";

        setTimeout(() => {
        terminalInput.focus();
        }, 100);
    } else {
        closeTerminal();
        terminalIcon.style.transform = "translateY(0) scale(1)";

    }
});

function print(text = "", type = "") {
    const line = document.createElement("div");

    line.classList.add("terminal-line");

    if (type === "error") {
        line.classList.add("terminal-error");
    }

    if (type === "success") {
        line.classList.add("terminal-success");
    }

    if (type === "info") {
        line.classList.add("terminal-info");
    }

    line.textContent = text;

    terminalOutput.appendChild(line);

    terminalContent.scrollTop = terminalContent.scrollHeight;
}


function updatePrompt() {
    const prompt = document.querySelector(".terminal-prompt");

    prompt.textContent = `void ${currentDirectory} >`;
}

const fileSystem = {
    "/": ["home", "usr", "var", "etc", "void.txt"],
    "/home": ["void"],
    "/home/void": ["Desktop", "Documents", "Downloads"],
    "/home/void/Desktop": [],
    "/home/void/Documents": [],
    "/home/void/Downloads": []
};

let currentDirectory = "/home/void";

const commands = {

    help() {
        print(`
Commandes disponibles :

  help              Affiche cette aide
  clear             Efface le terminal
  echo <texte>      Affiche un texte
  date              Affiche la date actuelle
  whoami            Affiche l'utilisateur actuel
  pwd               Affiche le dossier actuel
  ls                Liste les fichiers
  cd <dossier>      Change de dossier
  history           Affiche l'historique
  about             À propos de ce terminal
  neofetch          Informations système
  theme             Informations sur le thème
  exit              Ferme le terminal
`);
    },

    clear() {
        terminalOutput.innerHTML = "";
    },

    echo(args) {
        print(args.join(" "));
    },

    date() {
        print(new Date().toString());
    },

    whoami() {
        print("void");
    },

    pwd() {
        print(currentDirectory);
    },

    ls() {
        const files = fileSystem[currentDirectory];

        if (!files) {
            print("ls: impossible de lire le dossier", "error");
            return;
        }

        if (files.length === 0) {
            return;
        }

        print(files.join("    "));
    },

    cd(args) {
        if (!args[0]) {
            currentDirectory = "/home/void";
            updatePrompt();
            return;
        }

        const destination = args[0];

        if (destination === "..") {
            if (currentDirectory !== "/") {
                const parts = currentDirectory.split("/");
                parts.pop();

                currentDirectory = parts.join("/") || "/";
            }

            updatePrompt();
            return;
        }

        if (destination === "/") {
            currentDirectory = "/";
            updatePrompt();
            return;
        }

        let newPath;

        if (destination.startsWith("/")) {
            newPath = destination;
        } else {
            newPath =
                currentDirectory === "/"
                    ? `/${destination}`
                    : `${currentDirectory}/${destination}`;
        }

        if (fileSystem[newPath]) {
            currentDirectory = newPath;
            updatePrompt();
        } else {
            print(`cd: ${destination}: No such file or directory`, "error");
        }
    },

    history() {
        commandHistory.forEach((command, index) => {
            print(`${index + 1}  ${command}`);
        });
    },

    about() {
        print(`
VOID TERMINAL
─────────────

A small terminal interface
built with HTML, CSS and JavaScript.

version 1.0.0
`);
    },

    neofetch() {
        print(`
       .--.
      |o_o |
      |:_/ |
     //   \\ \\
    (|     | )
   /'\\_   _/'\\
   \\___)=(___/

OS:       VoidOS
Shell:    void-shell
User:     void
Directory:${currentDirectory}
Terminal: Web Terminal
`);
    },

    theme() {
        print(`
Current theme: glass-dark
Background: translucent
Accent: white
`);
    },

    exit() {
        closeTerminal();
        terminalIcon.classList.remove("active");
    }
};

terminalInput.addEventListener("keydown", (event) => {

    // ENTER
    if (event.key === "Enter") {

        const rawCommand = terminalInput.value.trim();

        if (!rawCommand) {
            return;
        }

        // Ajouter à l'historique
        commandHistory.push(rawCommand);
        historyIndex = commandHistory.length;

        // Afficher la commande entrée
        print(`void ${currentDirectory} > ${rawCommand}`);

        executeCommand(rawCommand);

        terminalInput.value = "";

        terminalContent.scrollTop = terminalContent.scrollHeight;
    }


    // FLECHE HAUT
    if (event.key === "ArrowUp") {

        if (commandHistory.length === 0) {
            return;
        }

        historyIndex--;

        if (historyIndex < 0) {
            historyIndex = 0;
        }

        terminalInput.value = commandHistory[historyIndex];

        // placer le curseur à la fin
        setTimeout(() => {
            terminalInput.selectionStart =
                terminalInput.selectionEnd =
                terminalInput.value.length;
        });
    }


    // FLECHE BAS
    if (event.key === "ArrowDown") {

        if (commandHistory.length === 0) {
            return;
        }

        historyIndex++;

        if (historyIndex >= commandHistory.length) {
            historyIndex = commandHistory.length;
            terminalInput.value = "";
            return;
        }

        terminalInput.value = commandHistory[historyIndex];
    }
});

function executeCommand(input) {

    const parts = input.split(" ");

    const commandName = parts.shift().toLowerCase();

    const args = parts.filter(Boolean);

    if (commands[commandName]) {
        commands[commandName](args);
        return;
    }

    print(
        `${commandName}: command not found`,
        "error"
    );
}