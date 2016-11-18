'use strict';

const React = require('react');
const classnames = require('classnames');

const baseClasses = {
  'mdl-tooltip': true,
};

class Tooltip extends React.Component {

  render() {
    /* eslint-disable no-unused-vars */
    const {
      children,
      className,
      large,
      htmlFor,
    } = this.props;
    /* eslint-enable no-unused-vars */

    const classes = classnames(baseClasses, {
      'mdl-tooltip--large': large,
    }, className);

    return (
      <span {...this.props} className={classes}>
        {children}
      </span>
    );
  }
}

Tooltip.propTypes = {
  className: React.PropTypes.string,
  htmlFor: React.PropTypes.string.isRequired,
  large: React.PropTypes.bool,
  children: React.PropTypes.any,
};

module.exports = Tooltip;
