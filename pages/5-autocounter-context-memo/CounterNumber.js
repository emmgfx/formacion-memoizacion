import { memo } from "react";
import Logger from "../../shared/logger";

const logger = new Logger("5. Auto counter context + Memo");

const CounterNumber = ({ count, instance }) => {
  logger.log("render CounterNumber", instance);
  return (
    <p className="flex items-center gap-2 font-semibold">
      <span>Count:</span>
      {count}
    </p>
  );
};

export default memo(CounterNumber);
