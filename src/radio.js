'use strict';

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

const labelBaseClasses = {
  'mdl-radio': true,
  'mdl-js-radio': true
};

const inputBaseClasses = {
  'mdl-radio__button': true
};

class Radio extends React.Component {

  componentDidMount(){
    const node = this._element;
    mdl.upgradeElement(node, 'MaterialRadio');
  }

  componentWillUnmount(){
    const node = this._element;
    mdl.downgradeElements(node);
  }

  render(){
    const {
      className,
      ripple,
      name,
      label
    } = this.props;

    let {
      id
    } = this.props;

    const labelClasses = classnames(labelBaseClasses, {
      'mdl-js-ripple-effect': ripple
    });

    const inputClasses = classnames(inputBaseClasses, className);

    let labelField;
    if (label) {
      labelField = (<span className='mdl-radio__label'>{label}</span>);
    }

    if (!id) {
      id = '_' + Math.random().toString(36).slice(2);
    }

    const saveRef = (element) => this._element = element;

    return (
      <label ref={saveRef} htmlFor={id} className={labelClasses}>
        <input {...this.props} id={id} type='radio' name={name} className={inputClasses} />
        {labelField}
      </label>
    );
  }
}

Radio.propTypes = {
  className: React.PropTypes.string,
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  ripple: React.PropTypes.bool,
  label: React.PropTypes.string
};

module.exports = Radio;
