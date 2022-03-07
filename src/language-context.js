import { createContext, useContext, useState } from "react";

const languageContext = createContext({ language: "english" });
const languagesList = [
  { language: "telugu", head: "ఇ-కామర్స్", cartDes: "కార్ట్‌లోని వస్తువులు" }
];

const LanguageProvider = ({ children }) => {
  const [language, changeLanguage] = useState("English");
  const setEnglishLanguage = (language) => changeLanguage(language);
  const setTeluguLanguage = (language) => changeLanguage(language);
  return (
    <languageContext.Provider
      value={{ language, setEnglishLanguage, languagesList, setTeluguLanguage }}
    >
      {children}
    </languageContext.Provider>
  );
};

const useLanguage = () => useContext(languageContext);

export { LanguageProvider, useLanguage };
