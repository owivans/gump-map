import React from 'react';
import Toggle from 'react-toggle'

import './styles.css';

const Navbar = ({ onChangeTheme, lightMode }) => {
return (
  <div className={`navbar-main ${lightMode ? 'lightMode' : 'darkMode'}`} >
    <div className={`logo ${lightMode && 'logoLigth'}`} logoLigth></div>
      <Toggle
        value={lightMode}
        icons={false}
        onChange={(e) => onChangeTheme(lightMode)}
      />
  </div>
)};

export default Navbar;
