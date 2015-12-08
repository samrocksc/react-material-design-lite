'use strict';

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

const baseClasses = {
  'mdl-menu__item': true
};

class MenuListItem extends React.Component {
  render(){
    const {
      className,
      children
    } = this.props;

    const classes = classnames(baseClasses, className);

    return(
      <li {...this.props} className={classes}>
        {children}
      </li>
    );
  }
}

module.exports = MenuListItem;
