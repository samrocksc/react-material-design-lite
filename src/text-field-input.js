'use strict';

const React = require('react');
const classnames = require('classnames');

const baseClasses = {
  'mdl-textfield__input': true
};

class TextFieldInput extends React.Component {

  render(){
    const {
      className
    } = this.props;

    const classes = classnames(baseClasses, className);

    return (
      <input {...this.props} type='text' className={classes} />
    );
  }
}

TextFieldInput.propType = {
  className: React.PropTypes.string
};

module.exports = TextFieldInput;
