// import React, { createContext, useContext, useEffect } from "react";

// export const RoktLauncherContext = createContext(null);

// export function useRoktLauncher() {
//   return useContext(RoktLauncherContext);
// }

// export function RoktLauncherContextProvider({
//   children,
//   accountId,
//   sandbox = false,
// }) {
//   const [launcher, setLauncher] = useState(null);

//   useEffect(() => {
//     (async () => {
//       // Guards against Rokt script being still loaded into the application when the context is created
//       await new Promise((resolve) =>
//         window.Rokt
//           ? resolve()
//           : (document.getElementById("rokt-launcher").onload = resolve)
//       );

//       const launcherInstance = await window.Rokt.createLauncher({
//         accountId: accountId,
//         sandbox: sandbox,
//       });

//       setLauncher(launcherInstance);
//     })();

//     return () => {
//       if (launcher) {
//         launcher.terminate();
//       }
//     };
//   }, [accountId, sandbox]);

//   // Return the context provider
//   return (
//     <RoktLauncherContext.Provider value={launcher}>
//       <UploadToS3 ...> <-- Child Components
//     </RoktLauncherContext.Provider>
//   );
// }