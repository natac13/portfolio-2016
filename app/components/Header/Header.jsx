import React, { PropTypes } from 'react';
import img from './main_background.jpg';
import style from './style.scss';

import SocialLinks from '../SocialLinks/';

function Header(props) {
  const { appName, pathname } = props;

  return (
    <header className={style.wrapper}>
      <img className={style.background} src={img} />
      {!!pathname ?
        <h1 className={style.title}>Contact Sean Campbell</h1> :
        <h1 className={style.title}>Sean Campbell</h1>
      }
      <SocialLinks />
    </header>
  );
}

Header.propTypes = {
  appName: PropTypes.string.isRequired,
  pathname: PropTypes.string,
};

export default Header;
