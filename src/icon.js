'use strict';

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

const baseClasses = {
  'mdl-icon-toggle__label': true,
  'react-material-design-lite-icons': true
};

class Icon extends React.Component {

  render(){
    const {
      children,
    } = this.props;

    const classes = classnames(baseClasses, {
      'mdl-badge--overlap': overlap
    }, className);

    return (
      <span>
        {children}
      </span>
    );
  }
}

Icon.propTypes = {
  className: React.PropTypes.string
};

module.exports = Icon;
