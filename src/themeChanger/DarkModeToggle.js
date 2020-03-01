import React from 'react';

import useDarkMode from 'use-dark-mode';
import Toggle from './Toggle';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
  );
};

export default DarkModeToggle;
