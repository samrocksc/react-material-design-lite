'use strict';

//TODO it's borked
const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

const baseClasses = {
  'mdl-tooltip': true
};

class Tooltip extends React.Component {

  render(){
    
    const {
      children,
      className,
      large
    } = this.props;

    let { id } = this.props;

    const classes = classnames(baseClasses, {
      'mdl-tooltip--large': large
    }, className);

    return (
      <div htmlFor={id} className={classes}>
        {children}
      </div>
    );
  }
}

Tooltip.propTypes = {
  className: React.PropTypes.string,
  id: React.PropTypes.string.isRequired,
  large: React.PropTypes.bool
};

module.exports = Tooltip;
