import en from "./en";
import ar from "./ar";

export const locales = ["en", "ar"];
export const defaultLocale = "en";

const dictionaries = { en, ar };

export function getDictionary(locale) {
  return (locale && dictionaries[locale]) || dictionaries[defaultLocale];
}
