'use strict';

const React = require('react');
const classnames = require('classnames');

const baseClasses = {
  'mdl-textfield__input': true
};

class TextFieldTextarea extends React.Component {

  render(){
    const {
      className
    } = this.props;

    const classes = classnames(baseClasses, className);

    return (
      <textarea {...this.props} className={classes} />
    );
  }
}

TextFieldTextarea.propType = {
  className: React.PropTypes.string
};

module.exports = TextFieldTextarea;
