'use strict';

const React = require('react');
const classnames = require('classnames');
const Icon = require ('./icon');

const baseClasses = {
  'mdl-button': true,
  'mdl-js-button': true,
  'mdl-button--icon': true
};

class MenuButton extends React.Component {
  render() {
    const {
      className,
      children = <Icon name='more_vert'/>,
      id
    } = this.props;

    const classes = classnames(baseClasses, className);

    return (
      <button {...this.props} id={id} className={classes}>
        {children}
      </button>
    );
  }
}

MenuButton.propTypes = {
  className: React.PropTypes.string,
  id: React.PropTypes.string
};

module.exports = MenuButton;
