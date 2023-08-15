import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../shared/catchAsync';
import { userServices } from './user.services';

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await userServices.createUser(req.body);
    res.status(200).send({
      success: true,
      message: 'User created',
      meta: {
        data: result,
      },
    });
  },
);

const getUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.getUsers();
  res.status(200).send({
    success: true,
    message: 'Users retrived',
    meta: {
      data: result,
    },
  });
});

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.getSingleUser(req.params.id);
  res.status(200).send({
    success: true,
    message: 'User retrived',
    meta: {
      data: result,
    },
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.updateUser(req.params.id, req.body);
  res.status(200).send({
    success: true,
    message: 'User updated',
    meta: {
      data: result,
    },
  });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.deleteUser(req.params.id);
  res.status(200).send({
    success: true,
    message: 'User deleted',
    meta: {
      data: result,
    },
  });
});

export const userControllers = {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
