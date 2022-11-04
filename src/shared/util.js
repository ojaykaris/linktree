export class Util {
  static classNames(...args) {
    return args
      .filter((arg) => !!arg)
      .map((arg) => {
        if (Array.isArray(arg)) {
          return Util.classNames(...arg);
        }

        if (arg && typeof arg === "object") {
          return Util.classNames(
            ...Object.entries(arg).map(([key, value]) => (!!value ? key : ""))
          );
        }

        return String(arg);
      })
      .join(" ");
  }
}
