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
  constructor(...args){
    super(...args);
    this._autoId = '_' + Math.random().toString(36).slice(2);

  }
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
      id = this._autoId;
    }

    let defaultIcon;
    if(children){
      defaultIcon = (
        <Icon name={children}/>
      );
    } else {
      defaultIcon = (
        <Icon name='more_vert'/>
      );
    }

    return (
      <button {...this.props} id={id} className={classes}>
        {defaultIcon}
      </button>
    );
  }
}

MenuButton.propTypes = {
  className: React.PropTypes.string,
  id: React.PropTypes.string
};

module.exports = MenuButton;
