'use strict';

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

const baseClasses = {
  'mdl-progress': true,
  'mdl-js-progress': true
};

class Progress extends React.Component {

  componentDidMount(){
    const node = React.findDOMNode(this);
    mdl.upgradeElement(node, 'MaterialProgress');
  }

  componentWillUnmount(){
    const node = React.findDOMNode(this);
    mdl.downgradeElements(node);
  }

  render(){
    const {
      children,
      className,
      indeterminate
    } = this.props;

    const classes = classnames(baseClasses, {
      'mdl-progress__indeterminate': indeterminate
    }, className);

    return (
      <div {...this.props} className={classes}>
        {children}
      </div>
    );
  }
}

Progress.propTypes = {
  className: React.PropTypes.string,
  indeterminate: React.PropTypes.bool
};

module.exports = Progress;
