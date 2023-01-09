import { memo, useState } from "react";

import LessonHeader from "../../components/LessonHeader";
import Button from "../../components/Button";
import Tip from "../../components/Tip";

import CounterNumber from "./CounterNumber";
import Decoration from "./Decoration";

import Logger from "../../shared/logger";

const logger = new Logger("3. Counter + Decoration + memo");

const Lesson = () => {
  logger.log("render Lesson");

  const [count, setCount] = useState(0);

  return (
    <>
      <LessonHeader>3. Counter + Decoration + memo</LessonHeader>
      <div className="p-4 bg-white/10 rounded">
        <CounterNumber count={count} />
      </div>
      <div className="h-2" />
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <div className="h-2" />
      <Decoration />
      <Tip>
        <code>React.memo</code> <strong>stops the default behaviour</strong>
      </Tip>
      <Tip>
        This isn&apos;t the default behaviour because the majority of times,{" "}
        <strong>a re-render is faster enough</strong> to not overthink
      </Tip>
      <Tip>
        Over-memoization <strong>could be worse</strong> than a
        re-re-re-re-re-re-render
      </Tip>
    </>
  );
};

export default Lesson;
