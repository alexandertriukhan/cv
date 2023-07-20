import React from 'react';

const ConditionalWrapper = ({ condition, wrapper, children, falsyWrapper }) =>
  condition
    ? React.cloneElement(wrapper(children))
    : falsyWrapper
    ? React.cloneElement(falsyWrapper(children))
    : children;

export default ConditionalWrapper;
