import { AcademicFaculty, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { AcademicFacultySearchableFields } from './academicFaculty.constant';
import { IAcademicFacultyFilterRequest } from './academicFaculty.interface';

const insertIntoDB = async (
  data: AcademicFaculty
): Promise<AcademicFaculty> => {
  const result = await prisma.academicFaculty.create({
    data,
  });

  return result;
};

const getAllFromDB = async (
  filters: IAcademicFacultyFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<AcademicFaculty[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filtersData } = filters;

  // console.log(filters, filtersData);
  console.log(options);

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: AcademicFacultySearchableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length > 0) {
    andConditions.push({
      AND: Object.keys(filtersData).map(key => ({
        [key]: {
          equals: (filtersData as any)[key],
          mode: 'insensitive',
        },
      })),
    });
  }

  const whereCondition: Prisma.AcademicFacultyWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.academicFaculty.findMany({
    where: whereCondition,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: [options.sortOrder],
          }
        : { createdAt: 'desc' },
  });

  const total = await prisma.academicFaculty.count();

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getDataById = async (id: string): Promise<AcademicFaculty | null> => {
  const result = await prisma.academicSemester.findUnique({
    where: {
      id,
    },
  });

  return result;
};

export const AcademicFacultyService = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
};
