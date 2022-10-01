const {Router} = require('express');
const router = Router()

const empleadosControllers =  require('../controllers/indexControllers' )

//crud



router.get('/empleados', empleadosControllers.getEmpleados)

router.post('/crearempleados', empleadosControllers.createEmpleados)

router.get('/empleados/:id', empleadosControllers.getEmpleado)

router.put('/empleados/:id', empleadosControllers.editEmpleados)


router.delete('/empleados/:id', empleadosControllers.deleteEmpleados)





module.exports = router;