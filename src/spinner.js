'use strict';

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

const baseClasses = {
  'mdl-spinner': true,
  'mdl-js-spinner': true
};

class Spinner extends React.Component {

  componentDidMount(){
    const node = React.findDOMNode(this);
    mdl.upgradeElement(node, 'MaterialSpinner');
  }

  componentWillUnmount(){
    const node = React.findDOMNode(this);
    mdl.downgradeElements(node);
  }

  render(){
    const {
      children,
      className,
      active,
      singleColor
    } = this.props;

    const classes = classnames(baseClasses, {
      'is-active': active,
      'mdl-spinner--single-color': singleColor
    }, className);

    return (
      <div {...this.props} className={classes}>
        {children}
      </div>
    );
  }
}

Spinner.propTypes = {
  className: React.PropTypes.string,
  active: React.PropTypes.bool,
  singleColor: React.PropTypes.bool
};

module.exports = Spinner;
