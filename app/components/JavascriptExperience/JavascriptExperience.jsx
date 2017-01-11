import React, { PropTypes } from 'react';
import withProps from 'recompose/withProps';

import buildComponentList from '../../utils/buildComponentList.js';

import JavascriptProject from './JavascriptProject/';

import projectList from './assets/JavascriptProjects.json';

import style from './style.scss';


function JavascriptExperience(props) {
  const { buildComponentList, projectList } = props;
  const projects = projectList.map(buildComponentList(JavascriptProject));

  return (
    <div className={style.wrapper}>
      <div className={style.projects}>
        {projects}
      </div>
    </div>
    );
}

JavascriptExperience.propTypes = {
  buildComponentList: PropTypes.func.isRequired,
  projectList: PropTypes.array.isRequired,
};

export default withProps({ buildComponentList, projectList })(JavascriptExperience);
