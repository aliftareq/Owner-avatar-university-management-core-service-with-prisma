import { z } from 'zod';

const create = z.object({
  body: z.object({
    facultyId: z.string({
      required_error: 'facultyId is required as string',
    }),
    firstName: z.string({
      required_error: 'firstName is required as string',
    }),
    lastName: z.string({
      required_error: 'lastName is required as string',
    }),
    middleName: z.string({
      required_error: 'middleName is required as string',
    }),
    profileImage: z.string({
      required_error: 'profileImage is required as string',
    }),
    email: z.string({
      required_error: 'email is required as string',
    }),
    contactNo: z.string({
      required_error: 'contactNo is required as string',
    }),
    gender: z.string({
      required_error: 'gender is required as string',
    }),
    bloodGroup: z.string({
      required_error: 'bloodGroup is required as string',
    }),
    designation: z.string({
      required_error: 'designation is required as string',
    }),
    acdemicDepartmentId: z.string({
      required_error: 'acdemicDepartmentId is required as string',
    }),
    academicFacultyId: z.string({
      required_error: 'academicFacultyId is required as string',
    }),
  }),
});

const update = z.object({
  body: z.object({
    facultyId: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    middleName: z.string().optional(),
    profileImage: z.string().optional(),
    email: z.string().optional(),
    contactNo: z.string().optional(),
    gender: z.string().optional(),
    bloodGroup: z.string().optional(),
    designation: z.string().optional(),
    acdemicDepartmentId: z.string().optional(),
    academicFacultyId: z.string().optional(),
  }),
});

export const FacultyValidation = {
  create,
  update,
};
