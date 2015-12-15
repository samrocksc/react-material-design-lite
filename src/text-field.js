'use strict';

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');
const TextFieldLabel = require('./text-field-label');
const TextFieldTextarea = require('./text-field-textarea');
const TextFieldInput = require('./text-field-input');

const baseClasses = {
  'mdl-textfield': true,
  'mdl-js-textfield': true
};

class TextField extends React.Component {
  constructor(...args){
    super(...args);
    this._autoId = '_' + Math.random().toString(36).slice(2);
  }

  componentDidMount(){
    const node = this._element;
    mdl.upgradeElement(node, 'MaterialTextfield');
  }

  componentWillUnmount(){
    const node = this._element;
    mdl.downgradeElements(node);
  }

  render(){
    const {
      children,
      expandable,
      floating,
      className
    } = this.props;

    const inputChildren = React.Children.map(children, (child) => {
      switch(child.type) {
        case TextFieldLabel:
          if(child.props.htmlFor){
            return child;
          } else {
            return React.cloneElement(child, {htmlFor: this._autoId});
          }
        case TextFieldInput:
          if(child.props.id){
            return child;
          } else {
            return React.cloneElement(child, {id: this._autoId});
          }
        case TextFieldTextarea:
          if(child.props.id){
            return child;
          } else {
            return React.cloneElement(child, {id: this._autoId});
          }
        default:
          return child;
      }
    });

    const classes = classnames(baseClasses, {
      'mdl-textfield--expandable': expandable,
      'mdl-textfield--floating-label': floating
    }, className);

    const saveRef = (element) => this._element = element;

    return (
      <div {...this.props} ref={saveRef} className={classes}>
        {inputChildren}
      </div>
    );
  }
}

TextField.propTypes = {
  expandable: React.PropTypes.bool,
  className: React.PropTypes.string,
  floating: React.PropTypes.bool
};

module.exports = TextField;
