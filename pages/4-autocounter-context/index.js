import { useContext } from "react";

import { AutoCounterContext } from "../../contexts/AutoCounterContext";

import LessonHeader from "../../components/LessonHeader";
import CounterNumber from "./CounterNumber";

import Logger from "../../shared/logger";
import Tip from "../../components/Tip";

const logger = new Logger("4. Auto counter context");

const Lesson = () => {
  logger.log("render Lesson");

  const { autoCounter1, autoCounter2 } = useContext(AutoCounterContext);

  return (
    <>
      <LessonHeader>4. Auto counter context</LessonHeader>
      <div className="p-4 bg-white/10 rounded">
        <CounterNumber instance={1} count={autoCounter1} />
        <CounterNumber instance={2} count={autoCounter2} />
      </div>
      <Tip>
        Context updates two values, one each two seconds and the other each four
        seconds.
      </Tip>
      <Tip>
        Both <code>CounterNumber</code> instances are rendering each two
        seconds, although his <i>props</i> aren&apos;t changing
      </Tip>
    </>
  );
};

export default Lesson;
