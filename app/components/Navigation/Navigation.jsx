import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import classnames from 'classnames';
import Drawer from 'react-toolbox/lib/drawer';
import { Button, IconButton } from 'react-toolbox/lib/button';
import { Icon } from 'react-fa';

import style from './style.scss';

function Navigation(props) {
  const { navigation, actions } = props;
  console.log(props)
  const navClass = classnames({
    'hamburger': true,
    'hamburger--emphatic': true,
    'is-active': navigation.get('open'),
  });
  return (
    <div>
      <button className={navClass} type="button" onClick={actions.toggleNav}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <Drawer
        active={navigation.get('open')}
        onOverlayClick={actions.toggleNav}
        type="right"
      >
        <Button
          className={style.navBtn}
          label="Home / About"
          flat
          icon={<Icon name="home" />}
          neutral={false}
          onClick={() => {
            actions.toggleNav();
            return actions.pageChange();
          }}
        />
        <Button
          className={style.navBtn}
          label="JavaScript knowledge"
          flat
          icon={<Icon name="code" />}
          neutral={false}
          onClick={() => {
            actions.toggleNav();
            return actions.pageChange('javascriptKnowledge');
          }}
        />
        <Button
          className={style.navBtn}
          label="PLC Knowledge"
          flat
          icon={<Icon name="list-alt" />}
          neutral={false}
          onClick={() => {
            actions.toggleNav();
            return actions.pageChange('plcKnowledge');
          }}
        />
        <Button
          className={style.navBtn}
          label="Electrical Knowledge"
          flat
          icon={<Icon name="bolt" />}
          neutral={false}
          onClick={() => {
            actions.toggleNav();
            return actions.pageChange('electricalKnowledge');
          }}
        />
        <Button
          className={style.navBtn}
          label="Reading List"
          flat
          icon={<Icon name="book" />}
          neutral={false}
          onClick={() => {
            actions.toggleNav();
            return actions.pageChange('readingList');
          }}
        />
        <Button
          className={style.navBtn}
          label="Contact"
          flat
          icon={<Icon name="envelope" />}
          neutral={false}
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
