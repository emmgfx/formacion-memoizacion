import { memo } from "react";

import Logger from "../../shared/logger";

const logger = new Logger("3. Counter + Decoration + memo");

const Decoration = () => {
  logger.log("render Decoration");
  return (
    <img src="https://media1.giphy.com/media/ICOgUNjpvO0PC/giphy.gif?cid=ecf05e47u2fb7ppdze190jzwudbe08sl423483dnxfvtrv7y&rid=giphy.gif&ct=g" />
  );
};

export default memo(Decoration);
