'use strict';

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

const baseClasses = {
  'mdl-textfield': true,
  'mdl-js-textfield': true
};

class TextField extends React.Component {

  constructor(...args){
    super(...args);
    this._autoId = '_' + Math.random().toString(36).slice(2);
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
      className,
      id = this._autoId
    } = this.props;

    const inputChildren = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {
        htmlFor: id
      });
    });

    console.log('textfield this>',this);
    const classes = classnames(baseClasses, {
      'mdl-textfield--expandable': expandable,
      'mdl-button mdl-js-button mdl-button--icon': icon,
      'mdl-textfield--floating-label': floating
    }, className);

    const saveRef = (element) => this._element = element;

    return (
      <div {...this.props} ref={saveRef} className={classes}>
        {inputChildren}
      </div>
    );
  }
}

TextField.propTypes = {
  expandable: React.PropTypes.bool,
  icon: React.PropTypes.bool,
  className: React.PropTypes.string,
  floating: React.PropTypes.bool,
};

module.exports = TextField;
