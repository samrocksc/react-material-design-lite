'use strict';

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

class Menu extends React.Component {
  constructor(...args){
    super(...args);
    this._autoId = '_' + Math.random().toString(36).slice(2);
  }

  render(){
    const {
      children,
      id
    } = this.props;

    const menuChildren = React.Children.map(this.props.children, function(child) {
        return React.cloneElement(child, { id: this.id });
    });

    console.log('menu this>',this);
    return(
      <div>
        {menuChildren}
      </div>
    );
  }
}

Menu.propTypes = {
  id: React.PropTypes.string
};

module.exports = Menu;
