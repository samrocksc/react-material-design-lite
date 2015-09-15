'use strict';

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

const baseClasses = {
  'mdl-slider': true,
  'mdl-js-slider': true
};

class Slider extends React.Component {

  componentDidMount(){
    const node = React.findDOMNode(this);
    mdl.upgradeElement(node, 'MaterialSlider');
  }

  componentWillUnmount(){
    const node = React.findDOMNode(this);
    mdl.downgradeElements(node);
  }

  render(){
    const {
      className
    } = this.props;

    const classes = classnames(baseClasses, className);

    return (
      <input type="range" {...this.props} className={classes} />
    );
  }
}

Slider.propTypes = {
  className: React.PropTypes.string
};

module.exports = Slider;
