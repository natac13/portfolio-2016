import React, { PropTypes } from 'react';

import Header from '../Header';
import Footer from '../Footer/';
import About from '../About/';


import style from './style.scss';

function Main(props) {
  const { appName, actions } = props;
  return (
    <div className={style.wrapper}>
      <Header {...props} />
      <section className={style.main}>
        <About />
        {/*<p>Electrical Apps by me, an electrical apprentice</p>
        <a href="https://seancampbellnatac.com/conduit-fill/">Conduit Fill - 2015 CodeBook</a>
        <a href="https://seancampbellnatac.com/voltage-drop/">Voltage Drop - 2015 CodeBook</a>
        <a href="#" onClick={() => actions.pageChange('contact')}>Contact Sean Campbell</a>*/}
      </section>
      <Footer appName={appName} />
    </div>
  );
}

Main.propTypes = {
  appName: PropTypes.string,
  actions: PropTypes.object.isRequried,
};

export default Main;
