import { useTranslation } from "react-i18next"
import styles from "./index.module.scss"

export const NotFoundPage = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.notFound}>
      {t("Не найдено")}
    </div>
  )
}
