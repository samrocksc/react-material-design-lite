'use strict';

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

const baseClasses = {
  'mdl-icon-toggle': true,
  'mdl-js-icon-toggle': true
};

class IconToggle extends React.Component {

  componentDidMount(){
    const node = this._element;
    mdl.upgradeElement(node, 'MaterialIconToggle');
  }

  componentWillUnmount(){
    const node = this._element;
    mdl.downgradeElements(node);
  }

  render(){
    const {
      className,
      ripple,
      icon
    } = this.props;

    let {
      id
    } = this.props;

    const classes = classnames(baseClasses, {
      'mdl-js-ripple-effect': ripple
    }, className);

    if (!id) {
      id = '_' + Math.random().toString(36).slice(2);
    }

    const saveRef = (element) => this._element = element;

    return (
      <label {...this.props} ref={saveRef} htmlFor={id} className={classes}>
        <input id={id} type='checkbox' className='mdl-icon-toggle__input' />
        <span className='mdl-icon-toggle__label react-material-design-lite-icons'>{icon}</span>
      </label>
    );
  }
}

IconToggle.propTypes = {
  className: React.PropTypes.string,
  id: React.PropTypes.string,
  ripple: React.PropTypes.bool,
  icon: React.PropTypes.string.isRequired
};

module.exports = IconToggle;
