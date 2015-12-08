'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
const { TextField, TextFieldInput, TextFieldError, TextFieldLabel, TextFieldTextarea, Icon, Tooltip, Switch, Spinner, Slider, Radio, Progress, IconToggle, Button, Badge, Checkbox } = require('../');

const exampleStyle = {
  margin: 'auto',
  width: '800',
  border: '1px solid black',
  padding: '10px'
};

function Tree(props){
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

    <h4>Dropdowns</h4>
    <button id="demo-menu-lower-left" className="mdl-button mdl-js-button mdl-button--icon">
      <i className="material-icons">more_vert</i>
    </button>

  <ul {...props} className="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect" htmlFor="demo-menu-lower-left">
    <a href="#" className="mdl-menu__item">Some Action</a>
    <li className="mdl-menu__item">Another Action</li>
    <li disabled className="mdl-menu__item">Disabled Action</li>
    <li className="mdl-menu__item">Yet Another Action</li>
  </ul>

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
      <TextField>
        <TextFieldInput/>
        <TextFieldLabel>Regular Label</TextFieldLabel>
      </TextField>
      <br/>
      <TextField floating>
        <TextFieldInput id='someId'/>
        <TextFieldLabel htmlFor='someId'>Floating Label</TextFieldLabel>
      </TextField>
      <br/>
      <TextField>
        <TextFieldInput pattern="-?[0-9]*(\.[0-9]+)?"/>
        <TextFieldLabel>Error Message</TextFieldLabel>
        <TextFieldError>Not a number</TextFieldError>
      </TextField>
      <br/>
      <TextField>
        <TextFieldTextarea rows='3'/>
        <TextFieldLabel>Text Field Text Areas</TextFieldLabel>
      </TextField>

    <h4>Tooltips</h4>
      <span id='tt2'>Hover Me</span>
      <Tooltip htmlFor='tt2'>Tooltip</Tooltip>

    <h4>More to come....</h4>

  </div>
);
return exampleTree;
}


const container = document.createElement('div');

var counter = 0;

ReactDOM.render(<Tree id={counter} />, container);
setInterval(function(){
  console.log('ReRendering');
  counter += 1;
  ReactDOM.render(<Tree id={counter}/>, container);
}, 2500);

document.body.appendChild(container);
