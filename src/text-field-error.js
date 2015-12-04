'use strict';

const React = require('react');
const classnames = require('classnames');

const baseClasses = {
  'mdl-textfield__error': true
};

class TextFieldError extends React.Component {

  render(){
    const{
      children,
      className
    } = this.props;

    const classes = classnames(baseClasses, className);

    return (
      <span {...this.props} id={this.context.id} className={classes}>
        {children}
      </span>
    );
  }
}

TextFieldError.propTypes = {
  className: React.PropTypes.string
};

module.exports = TextFieldError;
