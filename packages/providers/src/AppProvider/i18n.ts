import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

export const initI18next = <T extends {[key: string]: string} = {}>(languages?: T) => {
  let fallbackLng = {}
  let firstLanguage = "fr"
  if (!languages) {
    fallbackLng = {
      "fr-FR": ["fr"],
      default: ["fr"]
    }
  } else {
    let iteration = 0
    for (var languageName in languages) {
      fallbackLng[languages[languageName.toString()]] = [languageName]
      if (iteration === 0) {
        firstLanguage = languageName
        fallbackLng["default"] = [languageName]
      }
      iteration++
    }
  }
  i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: fallbackLng,
    lng: firstLanguage,
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
  return i18n
}

export default initI18next;
