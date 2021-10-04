import express from 'express'

import {
    getAllEmployees,
    addEmployee,
    getEmployee,
    updateEmployee,
    removeEmployee
} from '../../controllers/employeeController'

const router = express.Router();


router
  .route('/')
  .get(getAllEmployees)
  .post(addEmployee);

router.route('/:id')
       .get(getEmployee)
       .patch(updateEmployee)
       .delete(removeEmployee)


export default router