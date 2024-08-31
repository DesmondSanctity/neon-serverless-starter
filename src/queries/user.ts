import { PrismaClient } from '@prisma/client';
import getAllWithPagination from '../../utils/paginate';

const prisma = new PrismaClient();

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
 getAll,
 getId,
 getEmail,
 updateId,
 deleteId,
};
