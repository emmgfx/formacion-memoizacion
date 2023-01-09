import { useContext } from "react";

import { AutoCounterContext } from "../../contexts/AutoCounterContext";

import LessonHeader from "../../components/LessonHeader";
import Tip from "../../components/Tip";
import CounterNumber from "./CounterNumber";

import Logger from "../../shared/logger";

const logger = new Logger("5. Auto counter context + Memo");

const Lesson = () => {
  logger.log("render Lesson");

  const { autoCounter1, autoCounter2 } = useContext(AutoCounterContext);

  return (
    <>
      <LessonHeader>5. Auto counter context + Memo</LessonHeader>
      <div className="p-4 bg-white/10 rounded">
        <CounterNumber instance={1} count={autoCounter1} />
        <CounterNumber instance={2} count={autoCounter2} />
      </div>
      <Tip>
        When the component uses a context,{" "}
        <strong>the behaviour is the same as if the state is local</strong>
      </Tip>
      <Tip>
        <strong>Not all the component tree is re-rendered.</strong> Only the
        components who use <code>useContext</code>
      </Tip>
      <Tip>
        The re-render is requested by the <code>useContext</code>,{" "}
        <strong>
          even if you&apos;re destructuring the response and the value
          you&apos;re reading isn&apos;t changed, an update on another value of
          the context implies a re-render
        </strong>
      </Tip>
    </>
  );
};

export default Lesson;
