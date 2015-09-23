'use strict';

const React = require('react');
const mdl = require('material-design-lite/material.min');
const classnames = require('classnames');

const baseClasses = {
  'mdl-data-table': true,
  'mdl-js-data-table': true
};

class TableColumn extends React.Component {
  render(){
    const {
      className,
      columns,
      numeric
    } = this.props;

    const classes = classnames({
      'mdl-data-table__cell--non-numeric': numeric
    });

    return (
      <thead>
        <tr>
          {
            columns.map(column => (<th className={classes}>{column}</th>))
          }
        </tr>
      </thead>
    );
  }
}

TableColumn.propTypes = {
  className: React.PropTypes.string,
  columns: React.PropTypes.array.isRequired,
  numeric: React.PropTypes.bool
};

class TableRow extends React.Component {
  render(){
    const {
      className,
      numeric,
      rows
    } = this.props;

    const classes = classnames({
      'mdl-data-table__cell--non-numeric': numeric
    });

    const getRow = (row) => {
      return (
        <tr {...this.props}>
          { row.map(col => (<td className={classes}>{col}</td>)) }
        </tr>
      );
    };

    return (
      <tbody>{ rows.map(getRow) }</tbody>
    );
  }
}

TableRow.propTypes = {
  className: React.PropTypes.string,
  rows: React.PropTypes.array.isRequired,
  numeric: React.PropTypes.bool
};

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
      children,
      className,
      selectable
    } = this.props;

    const classes = classnames(baseClasses, {
      'mdl-data-table--selectable': selectable
    }, className);

    return (
      <table {...this.props} className={classes}>
        {children}
      </table>
    );
  }
}

Table.propTypes = {
  className: React.PropTypes.string,
  selectable: React.PropTypes.bool
};

module.exports = {
  TableColumn,
  TableRow,
  Table
};
