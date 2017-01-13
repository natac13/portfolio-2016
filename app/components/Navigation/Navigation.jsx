import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import classnames from 'classnames';
import Drawer from 'react-toolbox/lib/drawer';
import { Button } from 'react-toolbox/lib/button';
import { Icon } from 'react-fa';

import { scrollTo, scrollTop } from '../../utils/scroller.js';

import style from './style.scss';

function Navigation(props) {
  const { navigation, actions, pathname } = props;
  console.log(props);

  const navBtnClass = classnames({
    [style.navBtn]: true,
    'hamburger': true,
    'hamburger--emphatic': true,
    'is-active': navigation.get('open'),
  });
  const hambugerInnerClass = classnames({
    'hamburger-inner': true,
    [style.hamburgerInner]: !navigation.get('open'),
    [style.hamburgerInner2]: navigation.get('open'),
  });

  return (
    <div>
      <button className={navBtnClass} type="button" onClick={actions.toggleNav}>
        <span className="hamburger-box">
          <span className={hambugerInnerClass}></span>
        </span>
      </button>
      <Drawer
        active={navigation.get('open')}
        onOverlayClick={actions.toggleNav}
        type="right"
        className={style.drawer}
      >
        <Button
          className={style.navLink}
          label={pathname === '/' ? 'Home' : 'Home / About' }
          flat
          primary
          icon={<Icon name="home" />}
          onClick={() => {
            actions.toggleNav();
            scrollTop();
            return actions.pageChange();
          }}
        />
        {pathname === '/' ?
          <Button
            className={style.navLink}
            label="About"
            flat
            primary
            icon={<Icon name="info-circle" />}
            onClick={() => {
              actions.toggleNav();
              return scrollTo('about');
            }}
          /> :
          null
        }
        <Button
          className={style.navLink}
          label="Blog"
          flat
          primary
          icon={<Icon name="medium" />}
          href="https://medium.com/@natac1311"
          target="_blank"
          onClick={actions.toggleNav}
        />
        <Button
          className={style.navLink}
          label="JavaScript Experience"
          flat
          primary
          icon={<Icon name="code" />}
          onClick={() => {
            actions.toggleNav();
            return actions.pageChange('javascript_experience');
          }}
        />
        <Button
          className={style.navLink}
          label="Tutoring - Electrical"
          flat
          primary
          icon={<Icon name="graduation-cap" />}
          onClick={() => {
            actions.toggleNav();
            return actions.pageChange('natacsvantagepoint');
          }}
        />
        <Button
          className={style.navLink}
          label="PLC Experience"
          flat
          primary
          icon={<Icon name="list-alt" />}
          onClick={() => {
            actions.toggleNav();
            return actions.pageChange('plcKnowledge');
          }}
        />
        <Button
          className={style.navLink}
          label="Electrical Experience"
          flat
          primary
          icon={<Icon name="bolt" />}
          onClick={() => {
            actions.toggleNav();
            return actions.pageChange('electrical_experience');
          }}
        />
        <Button
          className={style.navLink}
          label="Reading List"
          flat
          primary
          icon={<Icon name="book" />}
          onClick={() => {
            actions.toggleNav();
            return actions.pageChange('readingList');
          }}
        />
        <Button
          className={style.navLink}
          label="Contact"
          flat
          primary
          icon={<Icon name="envelope" />}
          onClick={() => {
            actions.toggleNav();
            return actions.pageChange('contact');
          }}
        />
      </Drawer>
    </div>
  );
}

Navigation.propTypes = {
  actions: PropTypes.object.isRequried,
  navigation: ImmutablePropTypes.map.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default Navigation;
