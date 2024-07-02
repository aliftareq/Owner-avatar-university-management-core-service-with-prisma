import { z } from 'zod';

const create = z.object({
  body: z.object({
    roomNumber: z.string({
      required_error: 'roomNumber is required as string',
    }),
    floor: z.string({
      required_error: 'floor is required as string',
    }),
    buildingId: z.string({
      required_error: 'buildingId is required as string',
    }),
  }),
});

const update = z.object({
  body: z.object({
    roomNumber: z.string().optional(),
    floor: z.string().optional(),
    buildingId: z.string().optional(),
  }),
});

export const RoomValidation = {
  create,
  update,
};
