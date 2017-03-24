import React, { PropTypes } from 'react';
import classnames from 'classnames';

import style from './style.scss';

function WireNumberColour(props) {
  const { className } = props;
  const wrapperClass = classnames({
    [style.wrapper]: true,
    [className]: !!className,
  });

  return (
    <section className={wrapperClass}>
      <form>

      </form>
    </section>
  );
}

WireNumberColour.propTypes = {
  className: PropTypes.string,
};

export default WireNumberColour;
