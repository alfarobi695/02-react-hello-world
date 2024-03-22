import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import React, { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/css/bootstrap.min.css");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
