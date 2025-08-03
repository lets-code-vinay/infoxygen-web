import React, { useEffect } from "react";
import AppRoutes from "./Routes";
import FloatingWhatsApp from "./components/FloatingWhatsApp/FloatingWhatsApp";

const App = () => {
  useEffect(() => {
    // Ensure the page scrolls to the top when the application loads
    window.scrollTo(0, 0);

    // Clear any hash from the URL that might cause unwanted scrolling
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }

    // Prevent scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <>
      <AppRoutes />
      <FloatingWhatsApp
        phoneNumber="+917307805030"
        message="Hello! I'm interested in your services. Can you help me?"
      />
    </>
  );
};

export default App;
