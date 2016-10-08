import React, { PropTypes } from 'react';

import Header from '../Header';
import Footer from '../Footer/';
import ContactForm from '../ContactForm/';

import style from './style.scss';

function Contact(props) {
  const { appName, actions } = props;

  return (
    <div className={style.wrapper}>
      <Header appName={appName} />
      <ContactForm actions={actions} />
      <Footer appName={appName} />
    </div>
  );
}

export default Contact;