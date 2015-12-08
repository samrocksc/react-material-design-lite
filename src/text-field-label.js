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
      children
    } = this.props;

    const classes = classnames(baseClasses, {
      'mdl-button mdl-js-button mdl-button--icon': icon
    }, className);

    return (
      <label {...this.props} htmlFor={this.context.id} className={classes}>
        {children}
      </label>
    );
  }
}

TextFieldLabel.propTypes = {
  icon: React.PropTypes.bool
};

TextFieldLabel.contextTypes = {
  id: React.PropTypes.string
};

module.exports = TextFieldLabel;
