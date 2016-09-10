import React, { PropTypes } from 'react';

import style from './style.scss';

function Header(props) {
  const { appName } = props;

  return (
    <header className={style.wrapper}>
      <h1 className={style.title}>{appName}</h1>
    </header>
  );
}

Header.propTypes = {
  appName: PropTypes.string.isRequired,
};

export default Header;
