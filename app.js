const { printTable } = require('console-table-printer');
const figlet = require('figlet');
const chalk = require('chalk');



function ask(){
    const prompt = require('prompt-sync')();
    const ba_2 = prompt("Bill Amount ?  :");
    const tipp_2 = prompt("tip (%) ?   :");
    return ([ba_2 ,tipp_2])
}


module.exports = {
    ask
}
