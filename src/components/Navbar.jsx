import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: "English" },
  fr: { nativeName: 'Français'}
};

export default function Navbar() {
  const { t, i18n } = useTranslation();
  return(
    <nav className='navbar'>
      <h2 className='nav-title'>{t('navbar.title')}</h2>
      <div className='nav-link'>
        <Link to='/'>{t('navbar.home')}</Link>
        <Link to='/posts'>{t('navbar.posts')}</Link>
        <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ display: i18n.resolvedLanguage === lng ? 'none' : '' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
            ))}
        </div>
      </div>
    </nav>
  );
}
