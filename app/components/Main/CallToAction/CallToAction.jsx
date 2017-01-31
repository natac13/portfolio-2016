import React, { PropTypes } from 'react';
import classnames from 'classnames';

import { Button } from 'react-toolbox/lib/button';

import Separator from '../../Separator/';

import style from './style.scss';

function CallToAction(props) {
  const { actions } = props;
  const wrapperClass = classnames({
    [style.wrapper]: true,
    [props.className]: !!props.className,
  });

  return (
    <section className={wrapperClass}>
      <header className={style.header}>
        <h3 className={style.title}>Tutoring Service</h3>
      </header>
      <Separator />
      <p className={style.pitch}>
        I offer tutoring for electrical apprentices with their trade
        school course work; any material from RLC circuit analysis to voltage
        drop and motor calculation through to PLC programming and electronics, etc.
        I know trade school moves fast and covers an ever increasing amount of material.
        Apprentices are dropped with the material and with the little time available,
        are sometimes left struggling; which is where you can contact me, to aid
        in your pursuit of becoming a licenced electrical journeyman.
      </p>
      <Button
        className={style.ctaBtn}
        data-hover="My Services"
        flat
        onClick={() => actions.pageChange('tutoring')}
        neutral={false}
        label="My Services"
      />
    </section>
  );
}

CallToAction.propTypes = {
  className: PropTypes.string,
  actions: PropTypes.object.isRequired,
};

export default CallToAction;
