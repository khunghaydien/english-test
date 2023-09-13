import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from "./en";
import viLang from "./vi";
const DEFAULT_LANGUAGE = "vi";
i18next.use(initReactI18next).init(
  {
    interpolation: {
      escapeValue: false,
    },
    lng: DEFAULT_LANGUAGE,
    resources: {
      en: {
        translation: enLang,
      },
      vi: {
        translation: viLang,
      },
    },
    defaultNS: "translation",
  },
  (err) => {
    err && console.error(err);
  }
);

export default i18next;
