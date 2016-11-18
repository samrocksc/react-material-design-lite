'use strict';

/* TODO Create a default stylesheet so the module can be used in offline apps as well
 *require('material-design-lite/material.min.css');
 *require('./icons.css');
 */

const components = {
  Icon: require('./icon'),
  Button: require('./button'),
  Badge: require('./badge'),
  Slider: require('./slider'),
  Progress: require('./progress'),
  Spinner: require('./spinner'),
  Tooltip: require('./tooltip'),
  Checkbox: require('./checkbox'),
  Radio: require('./radio'),
  Switch: require('./switch'),
  IconToggle: require('./icon-toggle'),
  TextField: require('./text-field'),
  TextFieldError: require('./text-field-error'),
  TextFieldInput: require('./text-field-input'),
  TextFieldLabel: require('./text-field-label'),
  TextFieldTextarea: require('./text-field-textarea'),
};

module.exports = components;
