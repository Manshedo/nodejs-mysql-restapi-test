import { Router } from 'express';

import { getEmployees, deleteEmployees,updateEmployees, allEmployees} from '../controllers/employees.controller.js'

const router = Router()

   router.get('/usuario', allEmployees)
   
   router.get('/usuario/:id', getEmployees)
   
   router.patch('/usuario/:id', updateEmployees)
   
   router.delete('/usuario/:id', deleteEmployees)
   



export default router;

