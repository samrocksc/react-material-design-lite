'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

const exampleTree = (
  <div>
    Examples
  </div>
);

const container = document.createElement('div');

ReactDOM.render(exampleTree, container);

document.body.appendChild(container);
