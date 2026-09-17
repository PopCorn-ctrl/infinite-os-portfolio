window.addEventListener("load", () => {
  console.log(`
██╗   ██╗ ██████╗ ██╗██████╗      ██████╗ ███████╗
██║   ██║██╔═══██╗██║██╔══██╗    ██╔═══██╗██╔════╝
██║   ██║██║   ██║██║██║  ██║    ██║   ██║███████╗
╚██╗ ██╔╝██║   ██║██║██║  ██║    ██║   ██║╚════██║
 ╚████╔╝ ╚██████╔╝██║██████╔╝    ╚██████╔╝███████║
  ╚═══╝   ╚═════╝ ╚═╝╚═════╝      ╚═════╝ ╚══════╝
`);

  console.log("%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "color:#8b5cf6");
  console.log("%cVOID OS // SYSTEM BOOT", "color:#a855f7;font-weight:bold;font-size:16px;");
  console.log("%cBuild: v2.3.1-dev", "color:#c084fc");
  console.log("%cKernel: INFINITE-OS", "color:#c084fc");
  console.log("%cDéveloppeur: PopCorn | Evan", "color:#c084fc");
  console.log("%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "color:#8b5cf6");

  const bootLogs = [
    ["INFO", "Initializing VOID Core..."],
    ["OK", "Core loaded."],
    ["INFO", "Mounting virtual filesystem..."],
    ["OK", "Filesystem mounted."],
    ["INFO", "Loading UI renderer..."],
    ["OK", "Glassmorphism engine ready."],
    ["INFO", "Injecting Y2K Cosmic assets..."],
    ["OK", "Assets verified."],
    ["INFO", "Loading SVG icon registry..."],
    ["OK", "124 icons cached."],
    ["INFO", "Preparing desktop environment..."],
    ["OK", "Desktop initialized."],
    ["INFO", "Starting clock service..."],
    ["OK", "Time synchronized."],
    ["INFO", "Checking animations..."],
    ["OK", "60 FPS renderer available."],
    ["INFO", "Scanning background layers..."],
    ["OK", "Parallax enabled."],
    ["INFO", "Registering context menu..."],
    ["OK", "Context menu online."],
    ["INFO", "Loading shutdown module..."],
    ["OK", "Shutdown handler ready."],
    ["INFO", "Initializing cursor engine..."],
    ["OK", "Cursor effects enabled."],
    ["INFO", "Allocating memory..."],
    ["OK", "Memory stable."],
    ["INFO", "Optimizing interface..."],
    ["OK", "Optimization complete."],
    ["INFO", "Checking browser compatibility..."],
    ["OK", `${navigator.userAgent.split(" ")[0]} detected.`],
    ["INFO", "Starting VOID services..."],
    ["OK", "All services online."],
  ];

  bootLogs.forEach(([type, msg]) => {
    let color = "#ffffff";

    if (type === "OK") color = "#22c55e";
    if (type === "INFO") color = "#60a5fa";
    if (type === "WARN") color = "#f59e0b";
    if (type === "ERROR") color = "#ef4444";

    console.log(`%c[${type}]%c ${msg}`, `color:${color};font-weight:bold;`, "color:white;");
  });

  console.log("");
  console.log("%cSYSTEM STATUS", "color:#a855f7;font-weight:bold;");
  console.table({
    "Desktop UI": "ONLINE",
    "Clock Service": "RUNNING",
    "Animations": "ACTIVE",
    "Cursor Engine": "ACTIVE",
    "Particle JS": "ACTIVE",
    "Paralax": "READY",
    "Context Menu": "READY",
    "Background Renderer": "STABLE",
    "Memory State": "HEALTHY",
    "FPS Target": "60"
  });

  console.log("%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "color:#8b5cf6");
  console.log(
    `%cVOID OS READY%c\nSession started • ${new Date().toLocaleString()}`,
    "color:#22c55e;font-weight:bold;font-size:15px;",
    "color:#cbd5e1;"
  );
  console.log("%cHave fun exploring the void.", "color:#94a3b8;font-style:italic;");
});