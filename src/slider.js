'use strict';

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

const baseClasses = {
  'mdl-slider': true,
  'mdl-js-slider': true,
};

class Slider extends React.Component {

  componentDidMount() {
    const node = this._element;
    mdl.upgradeElement(node, 'MaterialSlider');
  }

  componentWillUnmount() {
    const node = this._element;
    mdl.downgradeElements(node);
  }
/* eslint-disable no-unused-vars */
  render() {
    const {
      className,
      sliderWidth,
      min,
      max,
      ...rest
    } = this.props;

    const classes = classnames(baseClasses, className);

    const saveRef = element => (this._element = element);

    return (
      <p style={{ width: sliderWidth }}>
        <input {...rest} type="range" ref={saveRef} {...this.props} className={classes} />
      </p>
    );
  }
}
/* eslint-enable no-unused-vars */
Slider.propTypes = {
  className: React.PropTypes.string,
  sliderWidth: React.PropTypes.any,
  min: React.PropTypes.string,
  max: React.PropTypes.string,
};

module.exports = Slider;
