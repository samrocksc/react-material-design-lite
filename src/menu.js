'use strict';

const React = require('react');
const classnames = require('classnames');
const MenuList = require('./menu-list');
const MenuButton = require('./menu-button');

class Menu extends React.Component {
  constructor(...args){
    super(...args);
    this._autoId = '_' + Math.random().toString(36).slice(2);
  }

  render(){
    const {
      children
    } = this.props;

    const menuChildren  = React.Children.map(children, (child) => {
      switch(child.type) {
        case MenuButton:
          if(child.props.id){
            return child;
          } else {
            return React.cloneElement(child, {id: this._autoId});
          }
        case MenuList:
          if(child.props.htmlFor){
            return child;
          } else {
            return React.cloneElement(child, {htmlFor: this._autoId});
          }
        default:
          return child;
      }
    });
    return(
      <div>
        {menuChildren}
      </div>
    );
  }
}

module.exports = Menu;
