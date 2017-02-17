import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import classnames from 'classnames';

import ContactForm from '../ContactForm/';

import { Button } from 'react-toolbox/lib/button';

import style from './style.scss';

function Contact(props) {
  const { actions, display, classname } = props;

  const wrapperClass = classnames({
    [style.wrapper]: true,
    [classname]: !!classname,
  });

  return (
    <div className={wrapperClass}>
      <ContactForm actions={actions} display={display} />
      {/*<Button
        href="mailto:sean.campbell13@gmail.com"
        label="Contact Me"
      />*/}
    </div>
  );
}

Contact.propTypes = {
  actions: PropTypes.object,
  display: ImmutablePropTypes.map,
  classname: PropTypes.string,
};

export default Contact;
