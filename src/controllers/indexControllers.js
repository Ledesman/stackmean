const empleadosControllers = {}
const Empleados = require('../models/empleados')


empleadosControllers.getEmpleados = async(req,res) =>{
    const empleados = await Empleados.find()
    res.json(empleados)
}
empleadosControllers.createEmpleados = async(req,res) =>{
const newEmpeado =  new Empleados(req.body)
   await newEmpeado.save()

    res.send({message: 'Creando empleados'})
}
empleadosControllers.getEmpleado = async(req,res) =>{
  
    console.log(req.params)
  const empleado = await Empleados.findOne({_id: req.params.id} )
    res.send(empleado)
}
empleadosControllers.editEmpleados = async(req,res) =>{
  await Empleados.findByIdAndUpdate(req.params.id, req.body)
   
    res.send({message: 'Empleado Editado'})
}
empleadosControllers.deleteEmpleados = async(req,res) =>{
   await Empleados.findByIdAndDelete(req.params.id)
    res.send({message: 'Empleado eliminado'})
}




module.exports = empleadosControllers