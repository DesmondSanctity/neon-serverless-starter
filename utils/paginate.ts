import { PrismaClient } from '@prisma/client';
import prisma from '../src/configs/db';

const getAllWithPagination = async ({
 modelName,
 page = 1,
 perPage = 10,
 sortBy = 'id',
 sortOrder = 'asc',
 filter,
 filterFields,
}: {
 modelName: keyof PrismaClient;
 page?: number;
 perPage?: number;
 sortBy?: string;
 sortOrder?: 'asc' | 'desc';
 filter?: string;
 filterFields?: string[];
}) => {
 const skip = (page - 1) * perPage;
 const take = Number(perPage);
 const orderBy = { [sortBy]: sortOrder };
 let where = {};

 if (filter && filterFields && filterFields.length > 0) {
  where = {
   OR: filterFields.map((field) => ({
    [field]: { contains: filter },
   })),
  };
 }

 const model = prisma[modelName] as any;
 const totalCount = await model.count({ where });
 const data = await model.findMany({
  skip,
  take,
  orderBy,
  where,
 });

 return { totalCount, data };
};
export default getAllWithPagination;
