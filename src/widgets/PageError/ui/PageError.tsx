import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

export const PageError = () => {
  const { t } = useTranslation();
  const onReload = () => {
    location.reload();
  };

  return (
    <div>
      <div>{t("Ошибка загрузки")}</div>
      <Button theme={ButtonTheme.CLEAR} onClick={onReload}>
        {t("Перезагрузить")}
      </Button>
    </div>
  );
};
