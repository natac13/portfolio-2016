import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Separator from '../../Separator/';

import style from './style.scss';

function Statement(props) {
  const { classname, title, statements } = props;

  const wrapperClass = classnames({
    [classname]: !!classname,
    [style.wrapper]: true,
  });

  const statementComponents = statements.map((statement) => (
    <p className={style.statement}>{statement}</p>
  ));

  return (
    <div className={wrapperClass}>
      <h3 className={style.title}>{title}</h3>
      <Separator />
      {statementComponents}
    </div>
  );
}

Statement.propTypes = {
  classname: PropTypes.string,
  title: PropTypes.string,
  statements: PropTypes.array,
};

export default Statement;
