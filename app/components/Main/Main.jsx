import React, { PropTypes } from 'react';

import Header from '../Header';
import Footer from '../Footer/';

import style from './style.scss';

function Main(props) {
  const { appName, api, actions } = props;

  return (
    <div className={style.wrapper}>
      <Header appName={appName} />
      Future upgrade coming soon...
      <Footer appName={appName} />
    </div>
  );
}

export default Main;
