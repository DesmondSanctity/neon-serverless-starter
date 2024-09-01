import getAllWithPagination from '../../utils/paginate';
import prisma from '../configs/db';

const getAll = async ({
 page,
 perPage,
 sortBy,
 sortOrder,
 filter,
 filterFields,
}: {
 page: number;
 perPage: number;
 sortBy?: string;
 sortOrder?: 'asc' | 'desc';
 filter?: string;
 filterFields?: string[];
}) => {
 return getAllWithPagination({
  modelName: 'chat',
  page,
  perPage,
  sortBy,
  sortOrder,
  filter,
  filterFields,
 });
};
const create = async (message: string, userId: string) => {
 return prisma.chat.create({
  data: { message, userId }
 });
};

const getId = async (id: string) => {
 return prisma.chat.findUnique({
  where: { id },
 });
};

const updateId = async (id: string, data: any) => {
 return prisma.chat.update({
  where: { id },
  data,
 });
};
const deleteId = async (id: string) => {
 return prisma.chat.delete({
  where: { id },
 });
};

export default {
 create,
 getAll,
 getId,
 updateId,
 deleteId,
};
