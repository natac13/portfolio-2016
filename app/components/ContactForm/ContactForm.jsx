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

const TooltipButton = tooltip(Button);
// const TooltipIconButton = tooltip(IconButton);
const TooltipDropdown = tooltip(Dropdown);
const TooltipInput = tooltip(Input);
const TOOLTIP_DELAY = 650;


const appOptions = [
  { value: 'Conduit Fill', label: 'Conduit Fill' },
  { value: 'Voltage Drop', label: 'Voltage Drop' },
];

const fields = [
  'comments',
  'userEmail',
  'subject',
];


const initialValues = {
  subject: 'Conduit Fill',
  comments: '',
  userEmail: '',
};

function ContactForm(props) {
  const {
    fields: { comments, userEmail, subject },
    handleSubmit,
    onSubmit,
    submitting,
    actions,
    destroyForm,
    initializeForm,
    resetForm,
  } = props;
  // console.log(props);

  const hardReset = () => {
    destroyForm();
    initializeForm(initialValues);
    resetForm();
  };

  const softReset = () => resetForm();

  return (
    <div>
      <form role="form" onSubmit={handleSubmit(onSubmit(actions))}>
        <TooltipInput
          type="email"
          name="userEmail"
          label="Your Email"
          required
          allowBlank
          hint="yourEmail@provider.com"
          disabled={submitting}
          {...userEmail}
          tooltip="Enter your Email for a response."
          tooltipDelay={TOOLTIP_DELAY}
        />
        <TooltipDropdown
          label="Electrical Application"
          name="subject"
          allowBlank
          required
          source={appOptions}
          disabled={submitting}
          {...subject}
          tooltip="Select electrical application to comment on"
          tooltipDelay={TOOLTIP_DELAY}
        />
        <TooltipInput
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
        <TooltipButton
          type="submit"
          label="Send"
          icon={<Icon name="paper-plane-o" />}
          primary
          disabled={submitting}
          tooltip="Send email to Sean Campbell"
          tooltipDelay={TOOLTIP_DELAY}
        />
        <TooltipButton
          type="button"
          label="Clear"
          icon={<Icon name="trash-o" />}
          disabled={submitting}
          onClick={hardReset}
          tooltip="Reset contact form"
          tooltipDelay={TOOLTIP_DELAY}
        />
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
};

const onSubmit = (actions) => (values) => {
  return new Promise((resolve, reject) => {
    // dispatch action to call to middleware.
    console.log(values);
    console.log(actions);
    const { userEmail, subject, comments } = values;
    actions.sendEmail(userEmail, subject, comments)
    return resolve();
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
