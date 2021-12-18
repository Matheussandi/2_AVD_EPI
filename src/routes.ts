import { Router } from 'express';

import { EmployeesController } from './controllers/EmployeesController';
import { EpisController } from './controllers/EpisControllers';
import { DeliveryEpiController } from './controllers/DeliveryEpiController'

const routes = Router();

const employeesController = new EmployeesController();
const episController = new EpisController();
const deliveryEpiController = new DeliveryEpiController();

routes.post('/funcionarios', employeesController.create);
routes.get('/funcionarios', employeesController.index);
routes.delete('/funcionarios/:id', employeesController.delete);

routes.post('/epi', episController.create);
routes.get('/epi', episController.index);
routes.delete('/epi/:id', episController.delete);

routes.post('/entregaepi', deliveryEpiController.create);
routes.get('/entregaepi', deliveryEpiController.index);
routes.delete('/entregaepi/:id', deliveryEpiController.delete);

export { routes }

