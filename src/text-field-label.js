'use strict';
const React = require('react');
const classnames = require('classnames');

const baseClasses = {
  'mdl-textfield__label': true
};

class TextFieldLabel extends React.Component {

  render(){
    const {
      className,
      icon,
      children,
      htmlFor
    } = this.props;

    const classes = classnames(baseClasses, {
      'mdl-button mdl-js-button mdl-button--icon': icon
    }, className);

    console.log('TextFieldLabel This>', this);
    return (
      <label {...this.props} htmlFor={htmlFor} className={classes}>
        {children}
      </label>
    );
  }
}

TextFieldLabel.propTypes = {
  icon: React.PropTypes.bool,
  htmlFor: React.PropTypes.string
};

module.exports = TextFieldLabel;
