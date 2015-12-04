'use strict';

const React = require('react');
const classnames = require('classnames');

const baseClasses = {
  'react-material-design-lite-icons': true
};

class Icon extends React.Component {

  render(){
    const {
      children,
      className,
      toggle
    } = this.props;

    const classes = classnames(baseClasses, {
      'mdl-icon-toggle__label': toggle
    }, className);

    return (
      <span {...this.props} className={classes}>
        {children}
      </span>
    );
  }
}

Icon.propTypes = {
  className: React.PropTypes.string,
  toggle: React.PropTypes.bool
};

module.exports = Icon;
