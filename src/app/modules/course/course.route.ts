import express from 'express';
import { CourseController } from './course.contoller';

const router = express.Router();

router.post('/', CourseController.insertIntoDB);

export const CourseRoutes = router;
