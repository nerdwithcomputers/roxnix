const blessed = require('neo-neo-blessed');
// try {
const command = require('./commands.js');
// } catch(error){
  // console.error(error);
// }
var system = "dArnet";
var cwd = "home";
var fullPath = `systems/${system}/${cwd}`;

var style = {
  fg: 'green',
  bg: 'black',
  focus:{
    border:{
      fg: 'yellow',
      bg: 'black'
    }
  },
  border:{
    fg:'green',
    bg:'black'
  }
};
var screen = blessed.screen({
  smartCSR: true,
  dockBorders: true,
  ignoreLocked: ['M-q']
});
screen.key(['escape','M-q'], (ch,key)=>{
  screen.destroy();
  return process.exit(0);
});

var workingDir = blessed.box({
  parent: screen,
  top: 0,
  right: 1,
  width: '45%',
  height: '100%',
  scrollable: true,
  border:{
    type: 'line'
  },
  style: style
});

var inputBox = blessed.Textbox({
  parent: screen,
  bottom: 0,
  left: 1,
  height: 3,
  width: '50%',
  inputOnFocus: true,
  scrollable: true,
  mouse: true,
  keys: true,
  border:{
    type: 'line'
  },
  style: style
});
inputBox.on("submit", ()=>{
  if(inputBox.value.length > 0){
    out.pushItem(cwd + "/> " + inputBox.value);
    for(let command of inputBox.value.split('&&')){
      out.pushItem(command.parseCommand(inputBox.value, system, cwd));
    }
    inputBox.clearValue();
    screen.render();
  };
  inputBox.readInput();
});

var out = blessed.list({
  top: 1,
  left: 1,
  width: '50%',
  height: '100%-4',
  style: style,
  border:{
    type: 'line'
  },
  items:[
    "ROXNIX 0.1 BOOTED"
  ]
});
screen.append(out);

inputBox.focus();
screen.render();
