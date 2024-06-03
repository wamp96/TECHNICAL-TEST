import {Router} from 'express';
import { TaskController } from '../controllers/TaskControllers';
import { isAuthenticated } from '../helpers/auth';


const router = Router();

//Listar Tareas generadas
router.get('/tasks/list', TaskController.renderTasks);

//Crear una nueva tarea
router.get('/tasks/create',  TaskController.renderTaskForm);
router.post('/tasks/create', TaskController.createTask);

//Editar una tarea existente
router.get('/tasks/edit/:id',  TaskController.renderEditForm);
router.put('/tasks/edit/:id',  TaskController.updateTask);

//Eliminar una tarea existente
router.delete('/tasks/delete/:id', TaskController.deleteTask);

//Se exporta router para poder tomarlos desde los otros archivos
export default router;