import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import withProps from 'recompose/withProps';

import buildComponentList from '../../utils/buildComponentList.js';

import ElectricalProject from './ElectricalProject/';
import AltHeader from '../AltHeader/';

import projectList from './assets/ElectricalProjects.json';

import style from './style.scss';


function ElectricalExperience(props) {
  const {
    buildComponentList,
    projectList,
    windowSize,
    location: { pathname },
  } = props;
  const projects = projectList.map(buildComponentList(windowSize, ElectricalProject));

  return (
      <div className={style.wrapper}>
        <AltHeader pathname={pathname} />
        <div className={style.projects}>
          {projects}
        </div>
      </div>
    );
}

ElectricalExperience.propTypes = {
  buildComponentList: PropTypes.func.isRequired,
  projectList: PropTypes.array.isRequired,
  windowSize: ImmutablePropTypes.map.isRequired,
  location: PropTypes.object,
};

export default withProps({ buildComponentList, projectList })(ElectricalExperience);
