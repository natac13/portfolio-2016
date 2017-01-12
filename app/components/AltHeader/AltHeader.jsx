import React, { PropTypes } from 'react';


import startCase from 'lodash/startCase';

import style from './style.scss';

function AltHeader(props) {
  const { pathname } = props;
  const cleanedPathname = startCase(pathname);

  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <h1 className={style.title}>{cleanedPathname}</h1>
      </header>
    </div>
  );
}

AltHeader.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default AltHeader;
