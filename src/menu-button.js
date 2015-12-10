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
      children = 'more_vert',
        classes = classnames(baseClasses, className),
          id
    } = this.props;

    return (
      <button {...this.props} id={id} className={classes}>
      <Icon name={children}/>
      </button>
    );
  }
}

MenuButton.propTypes = {
  className: React.PropTypes.string,
  id: React.PropTypes.string
};

module.exports = MenuButton;
