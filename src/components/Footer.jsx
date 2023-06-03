import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t, i18n } = useTranslation();
  return(
    <footer>
      <a href="https://jubertram.github.io/">{t('footer.portfolio')}</a>
    </footer>
  );
}
