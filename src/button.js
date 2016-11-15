'use strict';

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

const baseClasses = {
  'mdl-button': true,
  'mdl-js-button': true,
};

class Button extends React.Component {

  componentDidMount(){
    const { ripple } = this.props;

    const node = this._element;
    mdl.upgradeElement(node, 'MaterialButton');

    if (ripple) {
      mdl.upgradeElement(node, 'MaterialRipple');
    }
  }

  componentWillUnmount(){
    const node = this._element;
    mdl.downgradeElements(node);
  }

  render(){
    const {
      children,
      className,
      floating,
      colored,
      ripple,
      raised,
      primary,
      accent,
      icon,
      mini,
    } = this.props;

    const classes = classnames(baseClasses, {
      'mdl-button--fab': floating,
      'mdl-button--colored': colored,
      'mdl-js-ripple-effect': ripple,
      'mdl-button--raised': raised,
      'mdl-button--primary': primary,
      'mdl-button--accent': accent,
      'mdl-button--icon': icon,
      'mdl-button--mini-fab': floating && mini,
    }, className);

    const saveRef = element => (this._element = element);

    return (
      <button {...this.props} ref={saveRef} className={classes}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  className: React.PropTypes.string,
  floating: React.PropTypes.bool,
  colored: React.PropTypes.bool,
  ripple: React.PropTypes.bool,
  raised: React.PropTypes.bool,
  primary: React.PropTypes.bool,
  accent: React.PropTypes.bool,
  icon: React.PropTypes.bool,
  mini: React.PropTypes.bool,
  children: React.PropTypes.any,
};

module.exports = Button;
