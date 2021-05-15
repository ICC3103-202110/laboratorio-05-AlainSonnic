
const {viewapp,getTitle} = require('./view')
const {update_table} = require('./update')
const {ask} = require('./app')



console.log(getTitle());
const e = ask();
const d = update_table(e);
v = viewapp(d);
console.log(v);

