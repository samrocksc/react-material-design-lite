'use strict';

require('material-design-lite/material.min.css');

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

class Loading extends React.Component {

  constructor(props) {
    super(props);

    const { spinner } = props;

    this.baseClasses = {
      'mdl-progress': true,
      'mdl-js-progress': true
    };

    if(spinner) {
      this.baseClasses = {
        'mdl-spinner': true,
        'mdl-js-spinner': true
      };
    }
  }

  componentDidMount(){
    const { spinner } = this.props;

    const node = React.findDOMNode(this);
    mdl.upgradeElement(node, 'MaterialProgress');

    if(spinner) {
      mdl.upgradeElement(node, 'MaterialSpinner');
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
      singleColor
    } = this.props;

    const classes = classnames(this.baseClasses, {
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

Loading.protTypes = {
  className: React.PropTypes.string,
  indeterminate: React.PropTypes.bool,
  spinner: React.PropTypes.bool,
  active: React.PropTypes.bool,
  singleColor: React.PropTypes.bool
};

module.exports = Loading;
