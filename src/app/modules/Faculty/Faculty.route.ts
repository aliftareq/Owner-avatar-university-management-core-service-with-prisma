import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FacultyController } from './Faculty.controller';
import { FacultyValidation } from './Faculty.validation';

const router = express.Router();

router.get('/', FacultyController.getAllFromDB);
router.get('/:id', FacultyController.getDataById);
router.post(
  '/',
  validateRequest(FacultyValidation.create),
  FacultyController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(FacultyValidation.update),
  FacultyController.updateIntoDB
);

router.delete('/:id', FacultyController.deleteFromDB);

router.post(
  '/:id/assign-courses',
  validateRequest(FacultyValidation.assignOrRemoveCourses),
  FacultyController.assignCourses
);

router.delete(
  '/:id/remove-courses',
  validateRequest(FacultyValidation.assignOrRemoveCourses),
  FacultyController.removeCourses
);

export const FacultyRoutes = router;
