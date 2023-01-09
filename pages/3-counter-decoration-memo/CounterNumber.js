import Logger from "../../shared/logger";

const logger = new Logger("3. Counter + Decoration + memo");

const CounterNumber = ({ count }) => {
  logger.log("render CounterNumber");
  return (
    <p className="flex items-center gap-2 font-semibold">
      <span>Count:</span>
      {count}
    </p>
  );
};

export default CounterNumber;
