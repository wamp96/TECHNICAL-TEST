import {Router} from 'express';
import { TaskController } from '../controllers/TaskControllers';

const router = Router();

router.get('/list', TaskController.renderTasks);
router.get('/', TaskController.renderTaskForm);
router.post('/tasks/create', TaskController.createTask);
router.get('/edit:id', TaskController.renderEditForm);
router.put('/update/:id', TaskController.updateTasks);
router.delete('/delete/:id', TaskController.deleteTasks);

export default router;