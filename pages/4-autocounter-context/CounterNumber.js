import Logger from "../../shared/logger";

const logger = new Logger("4. Auto counter context");

const CounterNumber = ({ count, instance }) => {
  logger.log("render CounterNumber", instance);
  return (
    <p className="flex items-center gap-2 font-semibold">
      <span>Count:</span>
      {count}
    </p>
  );
};

export default CounterNumber;
