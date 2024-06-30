import { z } from 'zod';

const create = z.object({
  body: z.object({
    year: z.number({
      required_error: 'Year is required as number',
    }),
    title: z.string({
      required_error: 'title is required as string',
    }),
    code: z.string({
      required_error: 'code is required as string',
    }),
    startMonth: z.string({
      required_error: 'startMonth is required as string',
    }),
    endMonth: z.string({
      required_error: 'endMonth is required as string',
    }),
  }),
});

export const AcademicSemesterValidation = {
  create,
};
