const path = require('path');
const bashPath = path.join(__dirname, './bash.js');


module.exports = 
    function pwd(cmd){
        if(cmd === 'pwd'){
            process.stdout.write(`${bashPath}\n`);
        }
    
};