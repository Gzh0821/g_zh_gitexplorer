import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiWorld } from 'react-icons/bi'; // You can choose your preferred icon

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <BiWorld /> {/* Icon for language */}
      </button>
      {isMenuOpen && (
        <div className="language-menu">
          <button onClick={() => changeLanguage('en')}>English</button>
          {/* <button onClick={() => changeLanguage('fr')}>French</button> */}
          <button onClick={() => changeLanguage('zh-hans')}>简体中文</button>
          {/* Add more buttons for additional languages */}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
