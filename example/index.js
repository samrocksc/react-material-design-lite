'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
const { Tooltip, Textfield, Switch, Spinner, Slider, Radio, Progress, IconToggle, Button, Badge, Checkbox } = require('../');

const exampleStyle = {
  margin: 'auto',
  width: '800',
  border: '1px solid black',
  padding: '10px'
}

const exampleTree = (
  <div style={exampleStyle}>
    <h1>Examples</h1>

    <h4>Badges</h4>
      <Badge data-badge="2">Badge</Badge>

    <h4>Buttons</h4>
      <Button>Test Button</Button>

    <h4>Checkboxes</h4>
      <Checkbox label='With Id' id='checkboxId' />
      <Checkbox label='Without Id' />

    <h4>Icon Toggle</h4>
      <IconToggle ripple id='testId' icon='star_rate' />
      <IconToggle ripple icon='star_rate' />
      <br/>

    <h4>Progress</h4>
      <Progress indeterminate/>

    <h4>Radio Buttons</h4>
      <Radio name='radio' label='Radio Button 1' value='1' ripple /><br/>
      <Radio name='radio' label='Radio Button 2' value='2' ripple />

    <h4>Sliders</h4>
    <Slider/>

    <h4>Spinners</h4>
      <Spinner active/>

    <h4>Switches</h4>
      <Switch label='Switch' ripple/>
      <Switch id='switchid' label='With Id' ripple/>

    <h4>Input Fields</h4>
      <Textfield type='text' label="Example" floatingLabel />

    <h4>Tooltips</h4>
      <span id='tt2'>Hover Me</span>
      <Tooltip htmlFor='tt2'>Tooltip</Tooltip>

    <h4>More to come....</h4>

  </div>
);

const container = document.createElement('div');

ReactDOM.render(exampleTree, container);

document.body.appendChild(container);
