import React, { PropTypes } from 'react';


import style from './style.scss';

function JavascriptProject(props) {
  const {
    title,
    codeURL,
    demoURL,
    description,
    image,
    alt,
  } = props;
  function createMarkup() {
    return { __html: description };
  }
  return (
    <div className={style.wrapper}>
    <p>{title}</p>
    <p>{codeURL}</p>
    <p>{demoURL}</p>
    <p dangerouslySetInnerHTML={createMarkup()}></p>
    <p>{image}</p>
    <p>{alt}</p>
    </div>
  );
}

JavascriptProject.propTypes = {
  title: PropTypes.string,
  codeURL: PropTypes.string,
  demoURL: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
};

export default JavascriptProject;
