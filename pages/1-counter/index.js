import { useState } from "react";

import LessonHeader from "../../components/LessonHeader";
import Button from "../../components/Button";

import Logger from "../../shared/logger";

const logger = new Logger("1. Counter");

const Lesson = () => {
  logger.log("render Lesson");

  const [count, setCount] = useState(0);

  return (
    <>
      <LessonHeader>1. Counter</LessonHeader>
      <CounterNumber count={count} />
      <div className="h-2" />
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </>
  );
};

const CounterNumber = ({ count }) => {
  logger.log("render CounterNumber");
  return (
    <p className="flex items-center gap-2 font-semibold">
      <span>Count:</span>
      {count}
    </p>
  );
};

export default Lesson;
