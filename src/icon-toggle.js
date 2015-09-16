'use strict';

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

const baseClasses = {
  'mdl-icon-toggle': true,
  'mdl-js-icon-toggle': true
};

class IconToggle extends React.Component {

  componentDidMount(){
    const node = React.findDOMNode(this);
    mdl.upgradeElement(node, 'MaterialIconToggle');
  }

  componentWillUnmount(){
    const node = React.findDOMNode(this);
    mdl.downgradeElements(node);
  }

  render(){
    const {
      className,
      ripple,
      label
    } = this.props;

    let {
      id
    } = this.props;

    const classes = classnames(baseClasses, {
      'mdl-js-ripple-effect': ripple
    }, className);

    if (!id) {
      id = '_' + Math.random().toString(36).slice(2);
    }

    return (
      <label {...this.props} htmlFor={id} className={classes}>
        <input id={id} type='checkbox' className='mdl-icon-toggle__input' />
        <span className='mdl-icon-toggle__label'>{label}</span>
      </label>
    );
  }
}

IconToggle.propTypes = {
  className: React.PropTypes.string,
  id: React.PropTypes.string,
  ripple: React.PropTypes.bool,
  label: React.PropTypes.string
};

module.exports = IconToggle;
