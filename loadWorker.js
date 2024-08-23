async function registerServiceWorker() {
  if ("serviceworker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("worker.js", {scope: "/"});
      if (registration.installing) {
        console.log("Service Worker Installing");
      }
      else if (registration.waiting) {
        console.log("Service Worker installed");
      } 
      else if (registration.active) {
        console.log("Service worker active");
      } 
    }
    catch (error) {
    console.error("Registration failed with " + error);
    }
  }
}
registerServiceWorker();
