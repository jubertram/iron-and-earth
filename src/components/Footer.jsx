import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";


export default function Footer() {
  const { t, i18n } = useTranslation();
  return(
    <footer>
      <div>
      <a href="https://jubertram.github.io/" target='blank'><FaGlobe/></a>
      <a href="https://github.com/jubertram" target='blank'><FaGithub/></a>
      <a href="https://www.linkedin.com/in/julien-bertram/" target='blank'><FaLinkedin/></a>
      </div>
      <p>©️{t('navbar.title')}</p>
    </footer>
  );
}
