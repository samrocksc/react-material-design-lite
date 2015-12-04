'use strict';

const React = require('react');
const classnames = require('classnames');

const baseClasses = {
  'mdl-icon-toggle__label': true,
  'react-material-design-lite-icons': true
};

class Icon extends React.Component {

  render(){
    const {
      children,
      className
    } = this.props;

    const classes = classnames(baseClasses, className);

    return (
      <span {...this.props} className={classes}>
        {children}
      </span>
    );
  }
}

Icon.propTypes = {
  className: React.PropTypes.string
};

module.exports = Icon;
