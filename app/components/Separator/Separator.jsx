import React, { PropTypes } from 'react';
import classnames from 'classnames';

import style from './style.scss';

function Separator(props) {
  const { classname } = props;
  const finalClass = classnames({
    [style.separator]: true,
    [classname]: !!classname,
  });

  return (
    <hr className={finalClass} />
  );
}

Separator.propTypes = {
  classname: PropTypes.string,
};

export default Separator;
