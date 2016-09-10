import React, { PropTypes } from 'react';

import style from './style.scss';

function Footer(props) {
  const { appName } = props;

  return (
    <footer className={style.footer}>
      <div className={style.thanks}>
      </div>
      <div className={style.finalWord}>
        <p className={style.copyright}>
          Copyright &copy; 2016 <a href="http://seancampbellnatac.com/">Sean Campbell</a>
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  appName: PropTypes.string.isRequired,
};

export default Footer;
