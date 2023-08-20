class Util {
  static filterProperties(raw: object, unallowed: string[]): object {
    return Object.keys(raw)
      .filter((key) => !unallowed.includes(key))
      .reduce((obj, key) => {
        // @ts-ignore
        obj[key] = raw[key];
        return obj;
      }, {});
  }

  static isValidURL = (url: string): boolean => {
    const URLRegExp = new RegExp(
      "https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,4}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)"
    );

    return URLRegExp.test(url);
  };
}

export default Util;
