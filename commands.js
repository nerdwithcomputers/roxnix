const fs = require('node:fs');
const {exec} = require('child_process');

exports.parseCommand = (command, system, cwd)=>{
  let elements = command.split(' ');
  let localPath = `./systems/${system}/bin/${elements[0]}`;
  fs.readFile(localPath, (err,data)=>{
    if(err){
      console.log(elements.join(' '));
      exec(elements.join(' '), (err,stdout,stderr)=>{
        if(err){
          // return err
          console.log(err);
        }else if(stdout){
          // return stdout
          console.log(stdout);
        } else if(stderr){
          // return stderr
          console.log(stderr);
        }
      });
    } else {
      let command = require(localPath);
      elements.shift();
      return command.main(elements);
    }
  });
}
