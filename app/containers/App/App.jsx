import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../actions';
import { pure, compose } from 'recompose';

function App(props) {
  // const { api, form, routing, actions, appName } = props;
  console.log(props);
  const childrenWithStoreProp = React.Children.map(
    props.children,
    (child) => React.cloneElement(child, { ...props })
  );
  return (
    <div>
      {childrenWithStoreProp}
    </div>
  );
}

App.propTypes = {
  form: ImmutablePropTypes.map.isRequired,
  routing: ImmutablePropTypes.map.isRequired,
  actions: PropTypes.object.isRequired,
  appName: PropTypes.string.isRequired,
};

//  Redux Connection
function mapStateToProps(state) {
  return {
    appName: 'Portfolio',
    form: state.get('form'),
    routing: state.get('routing'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
    dispatch,
  };
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  pure,
)(App);
