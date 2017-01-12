import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import withProps from 'recompose/withProps';
import withReducer from 'recompose/withReducer';
import compose from 'recompose/compose';
import { Map } from 'immutable';
import classnames from 'classnames';

import createMarkup from '../../../utils/createMarkup.js';

import { Button } from 'react-toolbox/lib/button';
import Dialog from 'react-toolbox/lib/dialog';
import { CardMedia } from 'react-toolbox/lib/card';

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
    windowSize,
  } = props;
  const width = windowSize.get('width');


  return (
  <div key={key} className={style.wrapper}>
      {width < 1280 &&
        <h5 className={style.title}>{title}</h5>
      }
      <section>
        <CardMedia
          className={style.picture}
          aspectRatio="wide"
          image={require(`../assets/${image}`)}
        />
        <div className={style.overlay}>
          {width >= 1280 && <h5 className={style.overlayTitle}>{title}</h5>}
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
      </section>
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
  windowSize: ImmutablePropTypes.map.isRequired,
  key: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  desc: ImmutablePropTypes.map.isRequired,
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

