'use strict';

const React = require('react');
const classnames = require('classnames');

const baseClasses = {
  'mdl-badge': true
};

class Badge extends React.Component {

  render(){
    const {
      children,
      className,
      background = true,
      overlap
    } = this.props;

    const classes = classnames(baseClasses, {
      'mdl-badge--no-background': !background,
      'mdl-badge--overlap': overlap
    }, className);

    return (
      <a {...this.props} className={classes}>
        {children}
      </a>
    );
  }
}

Badge.propTypes = {
  href: React.PropTypes.string,
  className: React.PropTypes.string,
  background: React.PropTypes.bool,
  overlap: React.PropTypes.bool
};

module.exports = Badge;
