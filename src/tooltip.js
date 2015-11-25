'use strict';

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

const baseClasses = {
  'mdl-tooltip': true
};

class Tooltip extends React.Component {

  componentDidMount(){
    const node = this._element;
    mdl.upgradeElement(node, 'MaterialTooltip');
  }

  componentWillUnmount(){
    const node = this._element;
    mdl.downgradeElements(node);
  }

  render(){
    const {
      children,
      className,
      large
    } = this.props;

    const classes = classnames(baseClasses, {
      'mdl-tooltip--large': large
    }, className);

    const saveRef = (element) => this._element = element;

    return (
      <span {...this.props} ref={saveRef} className={classes}>
        {children}
      </span>
    );
  }
}

Tooltip.propTypes = {
  className: React.PropTypes.string,
  htmlFor: React.PropTypes.string.isRequired,
  large: React.PropTypes.bool
};

module.exports = Tooltip;
