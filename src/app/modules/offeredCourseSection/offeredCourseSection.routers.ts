import express from 'express';
import { OfferedCoursesSectionController } from './offeredCourseSection.controller';

const route = express.Router();

route.post('/', OfferedCoursesSectionController.insertIntoDB);

export const OfferedCoursesSectionRoutes = route;
