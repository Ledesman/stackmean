const mongoose = require('mongoose');

mongoose.
connect('mongodb://localhost:27017/meanempleados',{
    // useUnifieldTopology: true,
    // useNewUrlParser: true,
    // useFindAndModify: false

})
.then(db => console.log('base de datos conectada'))
.catch(err => console.error(err))
