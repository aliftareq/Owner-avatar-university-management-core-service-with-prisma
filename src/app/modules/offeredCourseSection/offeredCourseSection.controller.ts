import { OfferedCoursesSection } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { OfferedCoursesSectionService } from './offeredCourseSection.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCoursesSectionService.insertIntoDB(req.body);
  sendResponse<OfferedCoursesSection>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'offered course section created successfully',
    data: result,
  });
});

export const OfferedCoursesSectionController = {
  insertIntoDB,
};
