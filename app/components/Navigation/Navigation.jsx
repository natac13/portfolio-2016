import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import classnames from 'classnames';
import Drawer from 'react-toolbox/lib/drawer';
import { Button, IconButton } from 'react-toolbox/lib/button';
import { Icon } from 'react-fa';

import { animateScroll as scroll, Element, scroller } from 'react-scroll';

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

  const scrollOption = {
    duration: 1000,
    delay: 300,
    smooth: true,
    offset: 50,
    isDynamic: true,
  };

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
          label="Home"
          flat
          primary
          icon={<Icon name="home" />}
          onClick={() => {
            actions.toggleNav();
            scroll.scrollToTop(scrollOption);
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
              return scroller.scrollTo('about', scrollOption);
            }}
          /> :
          null
        }
        <Button
          className={style.navLink}
          label="JavaScript knowledge"
          flat
          primary
          icon={<Icon name="code" />}
          onClick={() => {
            actions.toggleNav();
            return actions.pageChange('javascriptKnowledge');
          }}
        />
        <Button
          className={style.navLink}
          label="PLC Knowledge"
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
          label="Electrical Knowledge"
          flat
          primary
          icon={<Icon name="bolt" />}
          onClick={() => {
            actions.toggleNav();
            return actions.pageChange('electricalKnowledge');
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
};

export default Navigation;
