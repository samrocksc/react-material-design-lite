'use strict';

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

const baseClasses = {
  'mdl-tabs': true,
  'mdl-js-tabs': true
};

const tabBaseClasses = {
  'mdl-tabs__tab': true
};

const panelBaseClasses = {
  'mdl-tabs__panel': true
};

class Tabs extends React.Component {

  componentDidMount(){
    const node = React.findDOMNode(this);
    mdl.upgradeElement(node, 'MaterialTabs');
  }

  componentWillUnmount(){
    const node = React.findDOMNode(this);
    mdl.downgradeElements(node);
  }

  render(){
    const {
      className,
      ripple,
      tabs
    } = this.props;

    const classes = classnames(baseClasses, {
      'mdl-js-ripple-effect': ripple
    }, className);

    return (
      <div {...this.props} className={classes}>
        <div className={'mdl-tabs__tab-bar'}>
          {
            tabs.map((tab) => {
              const tabClasses = classnames(tabBaseClasses, {
                'is-active': tab.active
              });
              return (<a href={'#' + tab.id} className={tabClasses}>{tab.name}</a>);
            })
          }
        </div>

        <div>
          {
            tabs.map((tab) => {
              const panelClasses = classnames(panelBaseClasses, {
                'is-active': tab.active
              });

              return (
                <div id={tab.id} className={panelClasses}>
                  {
                    tab.items.map((item) => {
                      return (<p>{item}</p>);
                    })
                  }
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  className: React.PropTypes.string,
  ripple: React.PropTypes.bool,
  tabs: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string,
    name: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element]),
    active: React.PropTypes.bool,
    items: React.PropTypes.arrayOf(React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element]))
  }))
};

module.exports = Tabs;
