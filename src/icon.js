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
      toggle,
      name
    } = this.props;

    const classes = classnames(baseClasses, {
      'mdl-icon-toggle__label': toggle
    }, className);

    return (
      <span {...this.props} className={classes}>
        {name}
      </span>
    );
  }
}

Icon.propTypes = {
  className: React.PropTypes.string,
  toggle: React.PropTypes.bool,
  name: React.PropTypes.string
};

module.exports = Icon;
