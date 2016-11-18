'use strict';

const React = require('react');
const classnames = require('classnames');

const baseClasses = {
  'mdl-textfield__input': true,
};

class TextFieldInput extends React.Component {

  render() {
    /* eslint-disable no-unused-vars */
    const {
      className,
      id,
    } = this.props;
    /* eslint-enable no-unused-vars */
    const classes = classnames(baseClasses, className);

    return (
      <input {...this.props} type="text" className={classes} />
    );
  }
}

TextFieldInput.propTypes = {
  className: React.PropTypes.string,
  id: React.PropTypes.string,
};

module.exports = TextFieldInput;
