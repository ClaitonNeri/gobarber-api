import { Router } from 'express';

const routes = Router();

routes.get('/users', (request, response) => {
  return response.json({ message: 'Hello User' });
});

export default routes;
