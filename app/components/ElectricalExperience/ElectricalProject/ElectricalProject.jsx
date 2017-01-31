import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import withReducer from 'recompose/withReducer';
import compose from 'recompose/compose';
import { Map } from 'immutable';
import slice from 'lodash/fp/slice';

import withProps from 'recompose/withProps';
import createMarkup from '../../../utils/createMarkup.js';

import { IconButton } from 'react-toolbox/lib/button';
import { Icon } from 'react-fa';

import style from './style.scss';

const OPEN_DESC = 'OPEN_DESC';
const CLOSE_DESC = 'CLOSE_DESC';

function ElectricalProject(props) {
  const {
   company,
   project,
   description,
   term,
   createMarkup,
   key,
   dispatch,
   desc,
   windowSize,
  } = props;

  const charAmount = windowSize.get('width') < 480 ? 200 : 300;
  let shortDesc;
  let bypass = false;

  if (description.length < 350) {
    // leave it alone
    // set bypass so no button appears at all
    shortDesc = description;
    bypass = true;
  } else {
    // shorten the description
    // shorten to 200 chars.
    shortDesc = slice(0, charAmount)(description);
  }
  const finalDesc = desc.get('showDesc') ? description : shortDesc;


  return (
    <div className={style.wrapper}>
      <hr className={style.separator} />
      <header className={style.header}>
        <h1 className={style.project}>{project}</h1>
        <div>
          <h3 className={style.company}>{company}</h3>
          <h5 className={style.term}>{`${term} term`}</h5>
        </div>
      </header>
      <p className={style.desc}>
        {finalDesc}
        {desc.get('showDesc') ?
        <IconButton
          primary
          onClick={() => dispatch({ type: CLOSE_DESC })}
          icon={<Icon name="times" />}
        /> :
        bypass ? null :
        <IconButton
          primary
          onClick={() => dispatch({ type: OPEN_DESC })}
          icon={<Icon name="ellipsis-h" />}
        />}
      </p>
      <hr className={style.separator} />
    </div>
  );
}

ElectricalProject.propTypes = {
  company: PropTypes.string,
  project: PropTypes.string,
  term: PropTypes.string,
  description: PropTypes.string,
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
)(ElectricalProject);
