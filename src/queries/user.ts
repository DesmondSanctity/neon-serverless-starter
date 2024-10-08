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
  modelName: 'user',
  page,
  perPage,
  sortBy,
  sortOrder,
  filter,
  filterFields,
 });
};

const create = async (email: string, password: string) => {
 return prisma.user.create({
  data: { email, password },
 });
};

const getId = async (id: string) => {
 return prisma.user.findUnique({
  where: { id },
 });
};

const getEmail = async (email: string) => {
 return prisma.user.findUnique({
  where: { email },
 });
};

const updateId = async (id: string, data: any) => {
 return prisma.user.update({
  where: { id },
  data,
 });
};

const deleteId = async (id: string) => {
 return prisma.user.delete({
  where: { id },
 });
};

export default {
 create,
 getAll,
 getId,
 getEmail,
 updateId,
 deleteId,
};
