import express from 'express';
import { userRoutes } from '../modules/user/user.route';
const router = express.Router();

const applicationRoutes = [
  {
    path: '/user',
    route: userRoutes,
  },
];

applicationRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;
