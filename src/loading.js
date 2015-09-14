'use strict';

require('material-design-lite/material.min.css');

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

const progressBaseClasses = {
  'mdl-progress': true,
  'mdl-js-progress': true
};

const spinnerBaseClasses = {
  'mdl-spinner': true,
  'mdl-js-spinner': true
};

class Loading extends React.Component {

  componentDidMount(){
    const { spinner } = this.props;

    const node = React.findDOMNode(this);

    if(spinner) {
      mdl.upgradeElement(node, 'MaterialSpinner');
    } else {
      mdl.upgradeElement(node, 'MaterialProgress');
    }
  }

  componentWillUnmount(){
    const node = React.findDOMNode(this);
    mdl.downgradeElements(node);
  }

  render(){
    const {
      children,
      className,
      indeterminate,
      active,
      spinner,
      singleColor
    } = this.props;

    const baseClasses = spinner ? spinnerBaseClasses : progressBaseClasses;

    const classes = classnames(baseClasses, {
      'mdl-progress__indeterminate': indeterminate,
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

Loading.propTypes = {
  className: React.PropTypes.string,
  indeterminate: React.PropTypes.bool,
  spinner: React.PropTypes.bool,
  active: React.PropTypes.bool,
  singleColor: React.PropTypes.bool
};

module.exports = Loading;
