'use strict';

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

const labelBaseClasses = {
  'mdl-icon-toggle': true,
  'mdl-js-icon-toggle': true
};

const inputBaseClasses = {
  'mdl-icon-toggle__input': true
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

    if (!id) {
      id = '_' + Math.random().toString(36).slice(2);
    }

    const labelClasses = classnames(labelBaseClasses, {
      'mdl-js-ripple-effect': ripple
    });

    const inputClasses = classnames(inputBaseClasses, className);

    const saveRef = (element) => this._element = element;

    return (
      <label htmlFor={id} ref={saveRef} className={labelClasses}>
        <input {...this.props} id={id} type='checkbox' className={inputClasses} />
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
