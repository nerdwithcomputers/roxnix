var blessed = require('neo-neo-blessed');

var screen = blessed.screen({
  smartCSR: true,
  dockBorders: true,
  ignoreLocked: ['C-c', 'M-q']
});
screen.key(['escape','M-c'], (ch,key)=>{
  return process.exit(0);
});

var inputAssembly = blessed.form({
  bottom: 3,
  left: 1,
  width: '50%',
  height: 4,
  mouse: true,
  keys: true,
});

var inputBox = blessed.Textbox({
  parent: inputAssembly,
  top: 0,
  height: 3,
  width: '100%-6',
  inputOnFocus: true,
  mouse: true,
  keys: true,
  content: ">",
  border:{
    type: 'line'
  },
  style: {
    fg: 'green',
    bg: 'black',
    border:{
      fg: 'yellow'
    },
  }
});
var inputGo = blessed.button({
  parent: inputAssembly,
  content: 'GO',
  top: 0,
  right: 0,
  width: 6,
  height: 3,
  border: {
    type: 'line'
  },
  padding:{
    left: 1
  },
  style:{
    fg: 'green',
    bg: 'black',
    border: {
      fg: 'yellow'
    },
    hover: {
      bg: 'red'
    }
  }
});
inputAssembly.submit(()=>{
  out.pushItem(">" + inputBox.data);
});

screen.append(inputAssembly);

var out = blessed.list({
  top: 3,
  left: 1,
  width: '50%',
  height: '70%',
  border:{
    type: 'line'
  },
  items:[
    "ROXNIX 0.1 BOOTED",
    "sh-boom"
  ]
});
screen.append(out);

inputBox.focus();
screen.render();
