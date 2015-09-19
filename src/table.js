'use strict';

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

const baseClasses = {
  'mdl-data-table': true,
  'mdl-js-data-table': true
};

class TableRow extends React.Component {
  render() {
    const { cols, cellClasses } = this.props;

    return (
      <tr {...this.props}>
        { cols.map(col => (<td className={cellClasses}>{col}</td>)) }
      </tr>
    );
  }
}

class Table extends React.Component {

  componentDidMount(){
    const node = React.findDOMNode(this);
    mdl.upgradeElement(node, 'MaterialDataTable');
  }

  componentWillUnmount(){
    const node = React.findDOMNode(this);
    mdl.downgradeElements(node);
  }

  render(){
    const {
      className,
      columns,
      rows,
      selectable,
      numeric
    } = this.props;

    const classes = classnames(baseClasses, {
      'mdl-data-table--selectable': selectable
    }, className);

    const cellClasses = classnames({
      'mdl-data-table__cell--non-numeric': numeric
    });

    return (
      <table {...this.props} className={classes}>
        <thead>
          <tr>
            {
              columns.map(column => (<th className={cellClasses}>{column}</th>))
            }
          </tr>
        </thead>
        <tbody>
          {
            rows.map(row => (<TableRow cellClasses={cellClasses} cols={row}></TableRow>))
          }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  className: React.PropTypes.string,
  selectable: React.PropTypes.bool,
  numeric: React.PropTypes.bool,
  columns: React.PropTypes.array.isRequired,
  rows: React.PropTypes.array.isRequired
};

module.exports = Table;
