import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();
  return <div className="page">{t("Главная страница")}</div>;
};
export default MainPage;
