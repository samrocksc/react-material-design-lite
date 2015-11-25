'use strict';

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

const baseClasses = {
  'mdl-checkbox': true,
  'mdl-js-checkbox': true
};

class Checkbox extends React.Component {

  componentDidMount(){
    const node = this._element;
    mdl.upgradeElement(node, 'MaterialCheckbox');
  }

  componentWillUnmount(){
    const node = this._element;
    mdl.downgradeElements(node);
  }

  render(){

    const saveRef = (element) => this._element = element;

    const {
      className,
      ripple,
      label
    } = this.props;

    let {
      id
    } = this.props;

    const classes = classnames(baseClasses, {
      'mdl-js-ripple-effect': ripple
    }, className);

    let labelField;
    if (label) {
      labelField = (<span className='mdl-checkbox__label'>{label}</span>);
    }

    if (!id) {
      id = '_' + Math.random().toString(36).slice(2);
    }

    return (
      <label {...this.props} htmlFor={id} className={classes}>
        <input id={id} ref={saveRef} type='checkbox' className='mdl-checkbox__input' />
        {labelField}
      </label>
    );
  }
}

Checkbox.propTypes = {
  className: React.PropTypes.string,
  id: React.PropTypes.string,
  ripple: React.PropTypes.bool,
  label: React.PropTypes.string
};

module.exports = Checkbox;
