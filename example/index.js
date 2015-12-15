'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

const Tree = require('./tree');

const container = document.createElement('div');

function render(){
  console.log('Re-rendering');
  ReactDOM.render(<Tree />, container);
}

render();
setInterval(render, 2500);

document.body.appendChild(container);
