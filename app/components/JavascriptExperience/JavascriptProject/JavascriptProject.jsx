import React, { PropTypes } from 'react';
import withProps from 'recompose/withProps';
import withReducer from 'recompose/withReducer';
import compose from 'recompose/compose';
import { Map } from 'immutable';
import classnames from 'classnames';

import createMarkup from '../../../utils/createMarkup.js';

import { Button } from 'react-toolbox/lib/button';
import Dialog from 'react-toolbox/lib/dialog';
import { Card, CardMedia, CardTitle, CardActions } from 'react-toolbox/lib/card';

import style from './style.scss';

const OPEN_DESC = 'OPEN_DESC';
const CLOSE_DESC = 'CLOSE_DESC';

function JavascriptProject(props) {
  const {
    title,
    codeURL,
    demoURL,
    description,
    image,
    alt,
    createMarkup,
    key,
    dispatch,
    desc,
  } = props;

  return (
  <div className={style.wrapper}>
    <CardMedia
      className={style.picture}
      aspectRatio="wide"
      image={require(`../assets/${image}`)}
    />
    <div className={style.overlay}>
      <h5 className={style.title}>{title}</h5>
      <div className={style.controls}>
        {demoURL &&
          <Button
            className={style.control}
            neutral={false}
            label="Demo"
            href={demoURL} target="_blank"
          />
        }
        {codeURL &&
          <Button
            className={style.control}
            neutral={false}
            label="Code"
            href={codeURL} target="_blank"
          />
        }
        <Button
          className={style.control}
          neutral={false}
          label="Info..."
          onClick={() => dispatch({ type: OPEN_DESC }) }
        />
      </div>
    </div>
    <Dialog
      actions={[{ label: 'Close', onClick: () => dispatch({ type: CLOSE_DESC }) }] }
      active={desc.get('showDesc')}
      title="Full Description"
      onOverlayClick={() => dispatch({ type: CLOSE_DESC })}
      onEscKeyDown={() => dispatch({ type: CLOSE_DESC })}
      type="normal"
    >
      <p className={style.description} dangerouslySetInnerHTML={createMarkup(description)} />
    </Dialog>
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
  createMarkup: PropTypes.func.isRequired,
};


const initialState = Map({ showDesc: false });

function reducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_DESC:
      return state.set('showDesc', true);
    case CLOSE_DESC:
      return state.set('showDesc', false);
    default:
      return state;
  }
}
export default compose(
  withReducer(
    'desc',
    'dispatch',
    reducer,
    initialState,
  ),
  withProps({ createMarkup })
)(JavascriptProject);

  // <div className={style.wrapper}>
  //         <Card className={style.project} raised>
  //         <CardMedia
  //           aspectRatio="wide"
  //           image={require(`../assets/${image}`)}
  //           contentOverlay
  //         />
  //         <CardTitle
  //           title={title}
  //         />
  //         <CardActions>
  //           <Button label="Demo" href={demoURL} primary target="_blank" />
  //           <Button label="Code" href={codeURL} primary target="_blank" />
  //           <Button label="Info..." onClick={() => dispatch({ type: OPEN_DESC }) } />
  //         </CardActions>
  //       </Card>
  //       <Dialog
  //         actions={[{ label: 'Close', onClick: () => dispatch({ type: CLOSE_DESC }) }] }
  //         active={desc.get('showDesc')}
  //         title="Full Description"
  //         onOverlayClick={() => dispatch({ type: CLOSE_DESC })}
  //         onEscKeyDown={() => dispatch({ type: CLOSE_DESC })}
  //         type="small"
  //       >
  //         <p className={style.description} dangerouslySetInnerHTML={createMarkup(description)} />
  //       </Dialog>
  // </div>
