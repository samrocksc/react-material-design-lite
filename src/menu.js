'use strict';

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

class Menu extends React.Component {

  render(){
    const {
      children
    } = this.props;

    return(
      <div>
        {children}
      </div>
    );
  }
}

module.exports = Menu;
