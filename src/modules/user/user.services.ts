import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

const createUser = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};

const getUsers = async (): Promise<User[] | null> => {
  const result = await prisma.user.findMany();
  return result;
};

const getSingleUser = async (id: string): Promise<User | null> => {
  const isExists = await prisma.user.findUnique({ where: { id } });
  if (!isExists) {
    throw new Error('user doesnot exists');
  }
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const updateUser = async (
  id: string,
  payload: Partial<User>,
): Promise<User | null> => {
  const isExists = await prisma.user.findUnique({ where: { id } });
  if (!isExists) {
    throw new Error('user doesnot exists');
  }
  const result = await prisma.user.update({
    data: payload,
    where: {
      id,
    },
  });
  return result;
};

const deleteUser = async (id: string) => {
  const isExists = await prisma.user.findUnique({ where: { id } });
  if (!isExists) {
    throw new Error('user doesnot exists');
  }
  const result = await prisma.user.delete({
    where: {
      id,
    },
  });
  return result;
};

export const userServices = {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
