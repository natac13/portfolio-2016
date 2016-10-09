import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Dialog from 'react-toolbox/lib/dialog';
import { Icon } from 'react-fa';

import style from './style.scss';

function Display(props) {
  const {
    display,
    closeDisplay,
  } = props;

  const error = display.get('error');
  const emailSent = display.get('emailSent');
  const emailSentMessage = display.get('emailSentMessage');


  return (
    <Dialog
      active={error || emailSent}
      onOverlayClick={closeDisplay}
      onEscKeyDown={closeDisplay}
      actions={[{ label: 'Close', onClick: closeDisplay, icon: <Icon name="check" />, className: style.done }]}
      title="Thank You!"
      className={style.dialog}
    >
      <div className={style.message}>
        {!!error ?
          <p className={style.short}>There was an error...</p> :
          <p className={style.short}>{emailSentMessage}</p>
        }
      </div>
    </Dialog>
  );
}

Display.propTypes = {
  display: ImmutablePropTypes.map.isRequired,
  closeDisplay: PropTypes.func.isRequired,
};

export default Display;
