
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/utils/theme";
import { useTranslation } from "@/utils/i18n";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();
  
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center gap-2"
      title={theme === "dark" ? t("theme.light") : t("theme.dark")}
    >
      {theme === "dark" ? (
        <>
          <Sun className="h-4 w-4" />
          <span className="sr-only sm:not-sr-only sm:ml-1">{t("theme.light")}</span>
        </>
      ) : (
        <>
          <Moon className="h-4 w-4" />
          <span className="sr-only sm:not-sr-only sm:ml-1">{t("theme.dark")}</span>
        </>
      )}
    </Button>
  );
};

export default ThemeToggle;
