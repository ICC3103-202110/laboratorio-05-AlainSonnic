

const { printTable } = require('console-table-printer');

function viewapp(ba,tipp,tip,Total){
    const testCases = [
        { "Bill Amount": ba, "tip (%)": tipp, "tip": tip,"Total $": Total},
      ];
    return printTable(testCases);
}


module.exports = {
    viewapp
}

console.log(viewapp(1000,50,500,1500))