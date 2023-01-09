import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import { AutoCounterProvider } from "../contexts/AutoCounterContext";

import Logger from "../shared/logger";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Clean the console for readability reasons
  useEffect(() => {
    const handleRouteChange = () => console.clear();
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <AutoCounterProvider>
      <NonContextConsumptionTest>
        <Component {...pageProps} />
      </NonContextConsumptionTest>
    </AutoCounterProvider>
  );
}

const NonContextConsumptionTest = ({ children }) => {
  /*
  This component isn't re-rendering when AutoCounter context values
  are updated, even being a child. That's because isn't reading the
  context (useContext(AutoCounterContext)).
  */
  const logger = useRef(new Logger("NonContextConsumptionTest"));
  logger.current.log("render");
  return children;
};
