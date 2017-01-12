import React from 'react';
import { curry } from 'ramda';

function buildComponentList(windowSize, component, data, index) {
  return (
    React.createElement(component, { key: index, ...data, windowSize })
  );
}

export default curry(buildComponentList);
