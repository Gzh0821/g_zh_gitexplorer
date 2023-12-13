import React from 'react';
import PropTypes from 'prop-types';
import Toggle from './toggle';
import LanguageSwitcher from './LanguageSwitcher';

const Nav = ({
  fastType, mode, onToggle, t
}) => (
  <nav className="nav">
    <Toggle
      checked={fastType}
      leftLabel={t('Normal type speed')}
      name="fastType"
      onChange={onToggle}
      rightLabel={t('Fast type speed')}
    />
    <Toggle
      checked={mode}
      leftLabel={t('Light Mode')}
      name="dark"
      onChange={onToggle}
      rightLabel={t('Dark Mode')}
    />
    <div className="language-switcher-container">
      <LanguageSwitcher />
    </div>
  </nav>
);

Nav.propTypes = {
  fastType: PropTypes.bool,
  mode: PropTypes.bool,
  onToggle: PropTypes.func,
  t: PropTypes.func.isRequired,
};

export { Nav };
