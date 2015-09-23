'use strict';

require('material-design-lite/material.min.css');

const table = require('./table');

const components = {
  Button: require('./button'),
  Badge: require('./badge'),
  Slider: require('./slider'),
  Progress: require('./progress'),
  Spinner: require('./spinner'),
  Textfield: require('./text-field'),
  Tooltip: require('./tooltip'),
  Checkbox: require('./checkbox'),
  Radio: require('./radio'),
  Switch: require('./switch'),
  IconToggle: require('./icon-toggle'),
  TableColumn: table.TableColumn,
  TableRow: table.TableRow,
  Table: table.Table
};

module.exports = components;
