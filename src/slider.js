'use strict';
//TODO add Width
//TODO min
//TODO max
//TODO tabindex
const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

const baseClasses = {
  'mdl-slider': true,
  'mdl-js-slider': true
};

class Slider extends React.Component {

  componentDidMount(){
    const node = this._element;
    mdl.upgradeElement(node, 'MaterialSlider');
  }

  componentWillUnmount(){
    const node = this._element;
    mdl.downgradeElements(node);
  }

  render(){
    const {
      className
    } = this.props;

    const classes = classnames(baseClasses, className);

    const saveRef = (element) => this._element = element;

    return (
      <input type="range" ref={saveRef} {...this.props} className={classes} />
    );
  }
}

Slider.propTypes = {
  className: React.PropTypes.string
};

module.exports = Slider;
