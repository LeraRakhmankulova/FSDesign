import { FC } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface LangToggleProps {
  className?: string
}

export const LangToggle: FC<LangToggleProps> = () => {
  const { t, i18n } = useTranslation();

  const toggleLng = () => {
    changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <Button onClick={toggleLng} theme={ButtonTheme.CLEAR}>
      {t("РУ")}
    </Button>
  );
};
