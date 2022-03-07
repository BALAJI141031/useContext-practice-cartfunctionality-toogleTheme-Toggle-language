import { useTheme } from "./theme-context";
import { useLanguage } from "./language-context";
const SetThemes = () => {
  const { setTheme } = useTheme();
  const { language } = useLanguage();

  return (
    <div>
      <button onClick={() => setTheme()} style={{ margin: "20px" }}>
        {language === "english" ? "Toggle theme" : "థీమ్ మార్చండి"}
      </button>
      <br />
    </div>
  );
};

export { SetThemes };
