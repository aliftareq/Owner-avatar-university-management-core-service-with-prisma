import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { StudentController } from './student.controller';
import { StudentValidation } from './student.validation';

const router = express.Router();

router.get('/', StudentController.getAllFromDB);
router.get('/:id', StudentController.getDataById);
router.post(
  '/',
  validateRequest(StudentValidation.create),
  StudentController.insertIntoDB
);
router.patch(
  '/:id',
  validateRequest(StudentValidation.update),
  StudentController.updateIntoDB
);

router.delete('/:id', StudentController.deleteFromDB);

export const StudentRoutes = router;
