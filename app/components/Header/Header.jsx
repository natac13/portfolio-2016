import React, { PropTypes } from 'react';

import style from './style.scss';

function Header(props) {
  const { appName, pathname } = props;

  return (
    <header className={style.wrapper}>
      {!!pathname ?
        <h1 className={style.title}>Contact Sean Campbell</h1> :
        <h1 className={style.title}>Sean Campbell's {appName}</h1>
      }
    </header>
  );
}

Header.propTypes = {
  appName: PropTypes.string.isRequired,
  pathname: PropTypes.string,
};

export default Header;
