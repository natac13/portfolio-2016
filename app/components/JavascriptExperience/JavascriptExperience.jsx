import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import withProps from 'recompose/withProps';

import buildComponentList from '../../utils/buildComponentList.js';

import JavascriptProject from './JavascriptProject/';
import AltHeader from '../AltHeader/';

import projectList from './assets/JavascriptProjects.json';

import style from './style.scss';


function JavascriptExperience(props) {
  console.log(props);
  const {
    buildComponentList,
    projectList,
    windowSize,
    location: { pathname },
  } = props;
  const projects = projectList.map(buildComponentList(windowSize, JavascriptProject));

  return (
    <div className={style.wrapper}>
      <AltHeader pathname={pathname} />
      <div className={style.projects}>
        {projects}
      </div>
    </div>
    );
}

JavascriptExperience.propTypes = {
  buildComponentList: PropTypes.func.isRequired,
  projectList: PropTypes.array.isRequired,
  windowSize: ImmutablePropTypes.map.isRequired,
};

export default withProps({ buildComponentList, projectList })(JavascriptExperience);
