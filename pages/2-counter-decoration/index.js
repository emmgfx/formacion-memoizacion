import { useState } from "react";

import LessonHeader from "../../components/LessonHeader";
import Button from "../../components/Button";
import Tip from "../../components/Tip";

import Logger from "../../shared/logger";

const logger = new Logger("2. Counter + Decoration");

const Lesson = () => {
  logger.log("render Lesson");

  const [count, setCount] = useState(0);

  return (
    <>
      <LessonHeader>2. Counter + Decoration</LessonHeader>
      <div className="h-2" />
      <CounterNumber count={count} />
      <div className="h-2" />
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <div className="h-2" />
      <Decoration />
      <Tip>
        <strong>Isn&apos;t re-rendering because of props</strong>, it&apos;s
        re-rendering because of parent is re-rendering
      </Tip>
      <Tip>
        React re-renders <strong>all</strong> childrens beacause he doesn&apos;t
        know if the components really changed (i.e. using{" "}
        <code className="text-red-500">Date()</code>)
      </Tip>
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

const Decoration = () => {
  logger.log("render Decoration");
  return (
    <img src="https://media1.giphy.com/media/ICOgUNjpvO0PC/giphy.gif?cid=ecf05e47u2fb7ppdze190jzwudbe08sl423483dnxfvtrv7y&rid=giphy.gif&ct=g" />
  );
};

export default Lesson;
