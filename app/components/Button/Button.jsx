import React, { PropTypes } from 'react';
import classnames from 'classnames';

import { Button } from 'react-toolbox/lib/button';
import { Icon } from 'react-fa';

import style from './style.scss';

function ButtonComponent(props) {
  const { href, onClick, className, label, icon, hoverStyle } = props;

  const btnClass = classnames({
    [className]: !!className,
    [style.btn]: true,
    [style[hoverStyle]]: !!hoverStyle,
  });

  return (
    <Button
      className={btnClass}
      data-hover={label}
      icon={<Icon className={style.icon} name={icon} />}
      flat
      href={!!href ? href : undefined}
      onClick={!!onClick ? onClick : undefined}
      neutral={false}
      children={<span className={style.span}>{label}</span>}
    />
  );
}

ButtonComponent.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  hoverStyle: PropTypes.string,
};

export default ButtonComponent;
