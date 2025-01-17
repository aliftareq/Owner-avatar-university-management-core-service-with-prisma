import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.get('/', AcademicSemesterController.getAllFromDB);
router.get('/:id', AcademicSemesterController.getDataById);
router.post(
  '/',
  validateRequest(AcademicSemesterValidation.create),
  AcademicSemesterController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.update),
  AcademicSemesterController.updateIntoDB
);

router.delete('/:id', AcademicSemesterController.deleteFromDB);

export const AcademicSemesterRoutes = router;
