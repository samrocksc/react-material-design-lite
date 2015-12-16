'use strict';

const React = require('react');
const classnames = require('classnames');

const baseClasses = {
  'mdl-menu': true,
  'mdl-js-menu': true
};

class MenuList extends React.Component {
 render(){
  const {
    className,
    children,
    ripple,
    topLeft,
    topRight,
    bottomRight,
    htmlFor
  } = this.props;

  const classes = classnames(baseClasses, {
    'mdl-js-ripple-effect': ripple,
    'mdl-menu--top-left': topLeft,
    'mdl-menu--top-right': topRight,
    'mdl-menu--bottom-right': bottomRight
  }, className);

    return (
      <ul {...this.props} className={classes} htmlFor={htmlFor}>
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
