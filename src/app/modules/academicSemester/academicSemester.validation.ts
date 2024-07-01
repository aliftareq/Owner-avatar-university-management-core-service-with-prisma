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

const update = z.object({
  body: z.object({
    year: z.number().optional(),
    title: z.string().optional(),
    code: z.string().optional(),
    startMonth: z.string().optional(),
    endMonth: z.string().optional(),
  }),
});

export const AcademicSemesterValidation = {
  create,
  update,
};
