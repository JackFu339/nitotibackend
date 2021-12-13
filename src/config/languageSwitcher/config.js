// import language from "../../pages/config/translation/language.config";
let language = "chinese";
const config = {
  defaultLanguage: language,
  options: [
    {
      languageId: "english",
      locale: "en",
      text: "English",
    },
    {
      languageId: "chinese",
      locale: "tw",
      text: "Chinese",
    },
    {
      languageId: "simple",
      locale: "cn",
      text: "simple",
    },
    {
      languageId: "french",
      locale: "fr",
      text: "French",
    },
    {
      languageId: "italian",
      locale: "it",
      text: "Italian",
    },
  ],
};

export function getCurrentLanguage(lang) {
  let selecetedLanguage = config.options[0];
  config.options.forEach((language) => {
    if (language.languageId === lang) {
      selecetedLanguage = language;
    }
  });
  return selecetedLanguage;
}
export default config;
