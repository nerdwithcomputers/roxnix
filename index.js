var blessed = require('neo-neo-blessed');

var screen = blessed.screen({
  smartCSR: true,
  dock: true
});
screen.key(['escape','C-c'], (ch,key)=>{
  return process.exit(0);
});

var input = blessed.form({
  top: 'top',
  left: 'center',
  width: '50%',
  height: '50%',
  mouse: true,
  border: {
    type: 'line'
  }
});

var 

screen.append(input);

var out = blessed.list({
  top: 'center',
  left: 'center',
  width: '50%',
  height: '50%',
  border:{
    type: 'line'
  },
  items:[
    "hello there"
  ]
});
// screen.append(out);

input.focus();
screen.render();
