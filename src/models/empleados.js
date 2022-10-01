const { Schema, model} = require('mongoose');

const empleadoSchema = new Schema({
    nombre: {type: String, required: true},
    posicion: {type: String, required: true},
    oficio: {type: String, required: true},
    salario: {type: Number, required: true},

},{
    timestamps: true,
    versionKey: false
})

module.exports = model('empleado', empleadoSchema)
