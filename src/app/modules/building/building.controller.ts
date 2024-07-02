import { Building } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { buildingFilterableFields } from './building.constant';
import { BuildingService } from './building.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.insertIntoDB(req.body);
  sendResponse<Building>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Building data Created Successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, buildingFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  // console.log('filters', filters);
  // console.log('options', options);

  const result = await BuildingService.getAllFromDB(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Building data fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getDataById = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.getDataById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Building data fetched successfully',
    data: result,
  });
});

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await BuildingService.updateIntoDB(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Building data updated successfully',
    data: result,
  });
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BuildingService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Building data deleted successfully',
    data: result,
  });
});

export const BuildingController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  updateIntoDB,
  deleteFromDB,
};
