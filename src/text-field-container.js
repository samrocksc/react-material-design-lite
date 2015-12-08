'use strict';

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

const baseClasses = {
  'mdl-textfield': true,
  'mdl-js-textfield': true
};

class TextFieldContainer extends React.Component {

  getChildContext(){
  return {
      id: '_' + Math.random().toString(36).slice(2)
    };
  }

  componentDidMount(){
    const node = this._element;
    mdl.upgradeElement(node, 'MaterialTextfield');
  }

  componentWillUnmount(){
    const node = this._element;
    mdl.downgradeElements(node);
  }

  render(){

    const {
      children,
      expandable,
      icon,
      floating,
      className
    } = this.props;

    const classes = classnames(baseClasses, {
      'mdl-textfield--expandable': expandable,
      'mdl-button mdl-js-button mdl-button--icon': icon,
      'mdl-textfield--floating-label': floating
    }, className);

    const saveRef = (element) => this._element = element;

    console.log('The This>', this);
    console.log('TextField Props> ', this.props);

    return (
      <div {...this.props} ref={saveRef} className={classes}>
        {children}
      </div>
    );
  }
}

TextField.propTypes = {
  expandable: React.PropTypes.bool,
  icon: React.PropTypes.bool,
  className: React.PropTypes.string,
  floating: React.PropTypes.bool
};

TextField.childContextTypes = {
  id: React.PropTypes.string
};

module.exports = TextFieldContainer;
