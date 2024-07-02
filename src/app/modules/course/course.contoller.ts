import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ICourseCreateData } from './course.interface';
import { CourseService } from './course.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseService.insertIntoDB(req.body);
  sendResponse<ICourseCreateData>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course data Created Successfully',
    data: result,
  });
});

export const CourseController = {
  insertIntoDB,
};
