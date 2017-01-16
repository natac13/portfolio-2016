import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import capitalize from 'lodash/fp/capitalize';
import { slice } from 'ramda';
import { IconButton } from 'react-toolbox/lib/button';
import { Icon } from 'react-fa';

import { scrollTo, scrollTop } from '../../../utils/scroller.js';

import SocialLinks from '../../SocialLinks/';

import style from './style.scss';

function Header(props) {
  const { pathname } = props;
  const cleanedPathname = slice(1, 10)(capitalize(pathname));

  return (
    <header className={style.wrapper}>
      <h1 className={style.title}>{!!pathname ? cleanedPathname : 'Sean Campbell'}</h1>
      {!pathname && <SocialLinks classname={style.socialLinks} />}


      <IconButton
        className={style.arrowDown}
        onClick={() => scrollTo('about')}
        icon={<Icon name="arrow-down" />}
      />
    </header>
  );
}

Header.propTypes = {
  pathname: PropTypes.string,
  navigation: ImmutablePropTypes.map.isRequired,
};

export default Header;
