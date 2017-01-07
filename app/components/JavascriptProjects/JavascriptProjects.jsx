import React, { PropTypes, Component } from 'react';
import axios from 'axios';

import JavascriptProject from '../JavascriptProject/';

import style from './style.scss';

class JavascriptProjects extends Component {

  constructor(props) {
    super(props);
    this.buildList = this.buildList.bind(this);
    this.state = { projects: [] };
    axios.get('/api/javascript-projects')
      .then((res) => {
        console.log(res.data);
        this.setState({ projects: res.data });
        console.log(JSON.stringify(this.state, null, 4));
      });
  }

  buildList(project) {
    return (
      <JavascriptProject
        title={project.title}
        codeURL={project.codeURL}
        demoURL={project.demoURL}
        description={project.description}
        image={project.image}
        alt={project.alt}
      />
    );
  }

  render() {
    const projects = this.state.projects.map(this.buildList);
    return (
      <div className={style.projects}>
        {projects}
      </div>
    );
  }
}

JavascriptProjects.propTypes = {

};

export default JavascriptProjects;
