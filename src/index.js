require('./database/databa')
const app = require('./server')



app.listen(app.get('port'));

console.log('servidor funcionando' , app.get('port'));