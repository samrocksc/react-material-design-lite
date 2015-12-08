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
      children
    } = this.props;

    const classes = classnames(baseClasses, className);

    let {
      id
    } = this.props;

    if(!id) {
      id = '_' + Math.random().toString(36).slice(2);
    }

    let defaultIcon;
    if(children){
      defaultIcon = children;
    } else {
      defaultIcon = (
        <Icon name='more_vert'/>
      );
    }
    console.log('menu-button>',id);
    return (
      <button {...this.props} id={id} className={classes}>
        {defaultIcon}
      </button>
    );
  }
}

MenuButton.propTypes = {
  className: React.PropTypes.string
};

module.exports = MenuButton;
