import React from 'react';
import { curry } from 'ramda';

function buildComponentList(component, data, index) {
  return (
    React.createElement(component, { key: index, ...data })
  );
}

export default curry(buildComponentList);
