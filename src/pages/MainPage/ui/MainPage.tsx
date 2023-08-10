import { BugButton } from "app/providers/errorBoundary";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();
  
  return <div className="page">
    {t("Главная страница")}
    <BugButton/>
  </div>;
};
export default MainPage;
