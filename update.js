const {inputForm, listForm} = require('./view')
const {printTable} = require('console-table-printer')


function update_table(e){                            /* bill amount, tip%*/
    const tip = (e[0] * (e[1]/100))
    const total = e[0] + e[1]
    return ([e[0],e[1],tip,total])  
}                 


module.exports = {
    update_table
}
