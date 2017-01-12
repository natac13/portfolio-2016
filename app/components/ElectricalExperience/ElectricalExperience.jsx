import React, { PropTypes } from 'react';
import withProps from 'recompose/withProps';

import buildComponentList from '../../utils/buildComponentList.js';

import ElectricalProject from './ElectricalProject/';

import projectList from './assets/ElectricalProjects.json';

import style from './style.scss';


function ElectricalExperience(props) {
  const { buildComponentList, projectList } = props;
  const projects = projectList.map(buildComponentList(ElectricalProject));

  return (
      <div className={style.projects}>
        {projects}
      </div>
    );
}

ElectricalExperience.propTypes = {
  buildComponentList: PropTypes.func.isRequired,
  projectList: PropTypes.array.isRequired,
};

export default withProps({ buildComponentList, projectList })(ElectricalExperience);
