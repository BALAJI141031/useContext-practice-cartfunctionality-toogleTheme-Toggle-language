import { useLanguage } from "./language-context";

const Languages = () => {
  const { setEnglishLanguage, language } = useLanguage();
  return (
    <div>
      <button onClick={() => setEnglishLanguage("telugu")}>
        {language === "english" ? "telugu" : "తెలుగు"}
      </button>
      <button onClick={() => setEnglishLanguage("english")}>
        {language === "english" ? "english" : "ఆంగ్ల"}
      </button>
    </div>
  );
};

export { Languages };
