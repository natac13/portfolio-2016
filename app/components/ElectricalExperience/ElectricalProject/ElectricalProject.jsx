import React, { PropTypes } from 'react';
import withProps from 'recompose/withProps';
import createMarkup from '../../../utils/createMarkup.js';

import style from './style.scss';

function ElectricalProject(props) {
  const {
   company,
   project,
   description,
   term,
   createMarkup,
  } = props;

  return (
    <div className={style.wrapper}>
    <p>{company}</p>
    <p>{project}</p>
    <p>{term}</p>
    <p dangerouslySetInnerHTML={createMarkup(description)}></p>
    </div>
  );
}

ElectricalProject.propTypes = {
  company: PropTypes.string,
  project: PropTypes.string,
  term: PropTypes.string,
  description: PropTypes.string,
};

export default withProps({ createMarkup })(ElectricalProject);
