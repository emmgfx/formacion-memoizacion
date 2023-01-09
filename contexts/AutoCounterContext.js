import { useRouter } from "next/router";
import { createContext, useState } from "react";
import { useInterval } from "react-use";
import Logger from "../shared/logger";

const AutoCounterContext = createContext();

const logger = new Logger("AutoCounterContext");

const AutoCounterProvider = ({ children }) => {
  logger.log("render");
  const { pathname } = useRouter();

  const [autoCounter1, setAutoCounter1] = useState(0);
  const [autoCounter2, setAutoCounter2] = useState(0);

  const shouldAutoUpdate = [
    "/4-autocounter-context",
    "/5-autocounter-context-memo",
  ].includes(pathname);

  useInterval(
    () => setAutoCounter1((current) => current + 1),
    shouldAutoUpdate ? 500 : null
  );
  useInterval(
    () => setAutoCounter2((current) => current + 1),
    shouldAutoUpdate ? 1000 : null
  );

  return (
    <AutoCounterContext.Provider value={{ autoCounter1, autoCounter2 }}>
      {children}
    </AutoCounterContext.Provider>
  );
};

export { AutoCounterProvider, AutoCounterContext };
