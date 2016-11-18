import React, { Component, PropTypes } from 'react';

export default class CodeSnip extends Component {
  render() {
    const { children } = this.props;
    console.log('children', children);
    return (
      <pre><code className="nohiglight">testing</code></pre>
    );
  }
}

CodeSnip.propTypes = {
  children: PropTypes.object,
};

