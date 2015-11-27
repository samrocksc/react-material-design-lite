'use strict';

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

const outerBaseClasses = {
  'mdl-textfield': true,
  'mdl-js-textfield': true
};

const inputBaseClasses = {
  'mdl-textfield__input': true
};

const labelBaseClasses = {
  'mdl-textfield__label': true
};

class Textfield extends React.Component {

  componentDidMount(){
    const node = this._element;
    mdl.upgradeElement(node, 'MaterialTextfield');
  }

  componentWillUnmount(){
    const node= this._element;
    mdl.downgradeElements(node);
  }

  render(){

    const {
      className,
      type,
      label,
      floatingLabel,
      error,
      expandable,
      button,
      icon,
      expandableHolder
    } = this.props;

    let {
      id
    } = this.props;
    
    const outerClasses = classnames(outerBaseClasses, {
      'mdl-textfield--floating-label': floatingLabel,
      'mdl-textfield--expandable': expandable,
      'mdl-button': button,
      'mdl-js-button': button,
      'mdl-button--icon': icon,
      'mdl-textfield__expandable-holder': expandableHolder
    }, className);

    const inputClasses = classnames(inputBaseClasses);

    const labelClasses = classnames(labelBaseClasses);

    let textField;
    let labelField;
    let errorField;

    if (!id) {
      id = '_' + Math.random().toString(36).slice(2);
    }

    if (type === 'textarea') {
      textField = (<textarea className={inputClasses} id={id} />);
    } else {
      textField = (<input className={inputClasses} type={type} id={id} />);
    }

    if (label) {
      labelField = (<label className={labelClasses} htmlFor={id}>{label}</label>);
    }

    if (error) {
      errorField = (<span className='mdl-textfield__error'>{error}</span>);
    }

    const saveRef = (element) => this._element = element;

    return (
      <div {...this.props} ref={saveRef} className={outerClasses}>
        {textField}
        {labelField}
        {errorField}
      </div>
    );
  }
}

Textfield.propTypes = {
  className: React.PropTypes.string,
  id: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  label: React.PropTypes.string,
  floatingLabel: React.PropTypes.bool,
  error: React.PropTypes.string,
  expandable: React.PropTypes.bool,
  button: React.PropTypes.bool,
  icon: React.PropTypes.bool,
  expandableHolder: React.PropTypes.bool
};

module.exports = Textfield;
