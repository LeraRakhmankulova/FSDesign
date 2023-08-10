import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();
  const onReload = () => {
    location.reload();
  };

  return (
    <div className={classNames(className)}>
      <strong>{t("Ошибка загрузки")}</strong>
      <Button theme={ButtonTheme.CLEAR} onClick={onReload}>
        {t("Перезагрузить")}
      </Button>
    </div>
  );
};
