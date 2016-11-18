'use strict';

const React = require('react');
const classnames = require('classnames');

const baseClasses = {
  'mdl-textfield__input': true,
};

class TextFieldTextarea extends React.Component {

  render() {
    /* eslint-disable no-unused-vars */
    const {
      className,
      id,
    } = this.props;
    /* eslint-enable no-unused-vars */

    const classes = classnames(baseClasses, className);

    return (
      <textarea {...this.props} className={classes} />
    );
  }
}

TextFieldTextarea.propTypes = {
  className: React.PropTypes.string,
  id: React.PropTypes.id,
};

module.exports = TextFieldTextarea;
