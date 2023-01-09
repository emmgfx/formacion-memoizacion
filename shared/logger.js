export default class Logger {
  static instancesCounter = 0;
  static isEnabled = true;
  static colors = [
    "#F2777A",
    "#F99157",
    "#FFCC66",
    "#99CC99",
    "#66CCCC",
    "#6699CC",
    "#CC99CC",
  ];
  static sourcesColors = {};

  constructor(source) {
    if (!Logger.isEnabled) {
      this.log = this.warn = this.error = () => {};
      return;
    }
    this.source = source;
    this.color =
      Logger.sourcesColors[source] ||
      Logger.colors[Logger.instancesCounter % Logger.colors.length];
    Logger.instancesCounter++;
    Logger.sourcesColors[source] = this.color;
  }

  log = (...rest) =>
    console.log(
      `%c${this.source}:`,
      `color: ${this.color}; font-weight:bold;`,
      ...rest
    );

  warn = (...rest) =>
    console.warn(
      `%c${this.source}:`,
      `color: ${this.color}; font-weight:bold;`,
      ...rest
    );

  error = (...rest) =>
    console.error(
      `%c${this.source}:`,
      `color: ${this.color}; font-weight:bold;`,
      ...rest
    );
}
