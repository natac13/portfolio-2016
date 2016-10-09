import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Header from '../Header';
import Footer from '../Footer/';
import ContactForm from '../ContactForm/';
import Display from '../Display/';

import kebabCase from 'lodash/kebabCase';

import style from './style.scss';

function Contact(props) {
  const { appName, actions, display, location } = props;

  const closeDisplay = () => {
    actions.closeDisplay();
    // actions.push('/');
    window.location.href = `https://seancampbellnatac.com/${kebabCase(display.get('subject'))}`;
  };

  return (
    <div className={style.wrapper}>
      <Header appName={appName} pathname={location.pathname} />
      <Display closeDisplay={closeDisplay} display={display} />
      <ContactForm actions={actions} />
      <Footer appName={appName} />
    </div>
  );
}

Contact.propTypes = {
  appName: PropTypes.string,
  actions: PropTypes.object,
  display: ImmutablePropTypes.map,
  location: PropTypes.object,
};

export default Contact;
