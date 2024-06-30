import { z } from 'zod';

const create = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required as string',
    }),
    academicFacultyId: z.string({
      required_error: 'academicFaculty id is required as string',
    }),
  }),
});

export const AcademicDepartmentValidation = {
  create,
};
