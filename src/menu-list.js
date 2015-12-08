'use strict';

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

const baseClasses = {
  'mdl-menu': true,
  'mdl-js-menu': true
};

class MenuList extends React.Component {
 render() {
  console.log('MenuList>',this._id);
  const {
    className,
    children,
    ripple,
    topLeft,
    topRight,
    bottomRight,
    htmlFor
  } = this.props;

  let {
    id
  } = this.props;

  if(!id) {
    id = '_' + Math.random().toString(36).slice(2);
  }
  const classes = classnames(baseClasses, {
    'mdl-js-ripple-effect': ripple,
    'mdl-menu--top-left': topLeft,
    'mdl-menu--top-right': topRight,
    'mdl-menu--bottom-right': bottomRight
  }, className);

    return (
      <ul {...this.props} className={classes} htmlFor={this._id}>
        {children}
      </ul>
    );
  }
}

MenuList.propTypes = {
  className: React.PropTypes.string,
  bottomRight: React.PropTypes.bool,
  topLeft: React.PropTypes.bool,
  topRight: React.PropTypes.bool,
  htmlFor: React.PropTypes.string
};

module.exports = MenuList;
