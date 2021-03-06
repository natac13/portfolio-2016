import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import { reduxForm } from 'redux-form';
import classnames from 'classnames';

import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';
import Dropdown from 'react-toolbox/lib/dropdown';
import { Icon } from 'react-fa';
import tooltip from 'react-toolbox/lib/tooltip';

import Display from '../Display/';

const TooltipButton = tooltip(Button);
// const TooltipIconButton = tooltip(IconButton);
const TooltipDropdown = tooltip(Dropdown);
const TooltipInput = tooltip(Input);
const TOOLTIP_DELAY = 650;


// const subjectOptions = [
//   { value: 'Conduit Fill', label: 'Conduit Fill' },
//   { value: 'Voltage Drop', label: 'Voltage Drop' },
// ];

const fields = [
  'comments',
  'userEmail',
  'subject',
  'name',
];


const initialValues = {
  subject: '',
  comments: '',
  userEmail: '',
  name: '',
};

import style from './style.scss';

function ContactForm(props) {
  const {
    fields: { comments, userEmail, subject, name },
    handleSubmit,
    onSubmit,
    submitting,
    actions,
    destroyForm,
    initializeForm,
    resetForm,
    display,
  } = props;
  // console.log(props);

  const closeDisplay = () => {
    actions.closeDisplay();
    actions.pageChange('');
    // window.location.href = `https://seancampbellnatac.com/${kebabCase(display.get('subject'))}`;
  };

  const hardReset = () => {
    destroyForm();
    initializeForm(initialValues);
    resetForm();
  };

  const softReset = () => resetForm();

  const formClass = classnames({
    [style.form]: true,
  });

  const sendButton = classnames({
    [style.button]: true,
    [style.sendButton]: true,
  });

  const clearButton = classnames({
    [style.button]: true,
    [style.clearButton]: true,
  });

  const commentsClass = classnames({
    [style.input]: true,
    [style.comments]: true,
  });

  return (
    <div>
      <Display closeDisplay={closeDisplay} display={display} />
      <form
        className={formClass}
        onSubmit={handleSubmit(onSubmit(actions))}
      >
        <TooltipInput
          className={style.input}
          type="text"
          name="name"
          label="Your Name"
          required
          allowBlank
          default="Website contact"
          hint="Joe Average"
          disabled={submitting}
          {...name}
          tooltip="Please enter your name."
          tooltipDelay={TOOLTIP_DELAY}
        />
        <TooltipInput
          className={style.input}
          type="email"
          name="userEmail"
          label="Your Email"
          required
          allowBlank
          hint="yourEmail@gmail.com"
          disabled={submitting}
          {...userEmail}
          tooltip="Enter your Email for a response."
          tooltipDelay={TOOLTIP_DELAY}
        />
{/*        <TooltipDropdown
          className={style.dropdown}
          label="Electrical Application"
          name="subject"
          allowBlank
          required
          source={subjectOptions}
          disabled={submitting}
          {...subject}
          tooltip="Select electrical application to comment on"
          tooltipDelay={TOOLTIP_DELAY}
        />*/}
        <TooltipInput
          className={commentsClass}
          type="text"
          name="comments"
          label="Comments"
          required
          multiline
          allowBlank
          disabled={submitting}
          {...comments}
          tooltip="Your thoughts on the electrical appliation..."
          tooltipDelay={TOOLTIP_DELAY}
        />
        <footer className={style.controls}>
          <TooltipButton
            className={sendButton}
            type="submit"
            label="Send"
            icon={submitting ? <Icon spin name="cog" /> : <Icon name="paper-plane-o" /> }
            primary
            disabled={submitting}
            tooltip="Send email to Sean Campbell"
            tooltipDelay={TOOLTIP_DELAY}
          />
          <TooltipButton
            className={clearButton}
            type="button"
            label="Clear"
            icon={<Icon name="trash-o" />}
            disabled={submitting}
            onClick={hardReset}
            tooltip="Reset contact form"
            tooltipDelay={TOOLTIP_DELAY}
          />
        </footer>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  resetForm: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  destroyForm: PropTypes.func,
  initializeForm: PropTypes.func,
  display: ImmutablePropTypes.map,
};

const onSubmit = (actions) => (values) => {
  return new Promise((resolve, reject) => {
    // dispatch action to call to middleware.
    const { userEmail, subject, comments, name } = values;
    actions.sendEmail(userEmail, subject, comments, name);
    return setTimeout(() => resolve(), 1250);
  });
};


export default compose(
  reduxForm(
    {
      form: 'contact',
      fields,
      getFormState: (state, reduxMountPoint) => state.get(reduxMountPoint).toJS(),
    },
    () => ({
      initialValues,
    }) // can load from state as first param, however I only need to set these as initial values.
  ),
  withProps({
    onSubmit,
  })
)(ContactForm);
