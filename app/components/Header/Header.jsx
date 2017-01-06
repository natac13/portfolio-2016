import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import img from './main_background.jpg';

import capitalize from 'lodash/fp/capitalize';
import { slice } from 'ramda';

import SocialLinks from '../SocialLinks/';

import style from './style.scss';

function Header(props) {
  const { pathname } = props;
  const cleanedPathname = slice(1, 10)(capitalize(pathname));

  return (
    <header className={style.wrapper}>
      {!pathname && <img className={style.background} src={img} />}
      <h1 className={style.title}>{!!pathname ? cleanedPathname : 'Sean Campbell'}</h1>
      {!pathname && <SocialLinks classname={style.socialLinks} />}
    </header>
  );
}

Header.propTypes = {
  pathname: PropTypes.string,
  actions: PropTypes.object.isRequried,
  navigation: ImmutablePropTypes.map.isRequired,
};

export default Header;
