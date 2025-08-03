import React, { useEffect } from "react";
import AppRoutes from "./Routes";

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

  return <AppRoutes />;
};

export default App;
