import { Request , Response } from "express";
import { z } from "zod";
const Task = require ('../models/Task');
/**
     * Author: Willian Andres Moreno Prieto
     * Date:31/05/2024
     * Update Date:31/05/2024
     * Description: Esta clase es la encargada 
*/

export class TaskController {
       
    private static createTaskSchema = z.object({
        title: z.string().min(1,{
            message: 'El titulo es requerido'
        }),
        description: z.string().min(1,{
            message: 'La descripcion es requerida'
        }),
    });

    //private static createTaskType = z.inter<typeof TaskController.createTaskSchema>;

    public static async renderTasks(req: Request, res: Response): Promise<void>{
        const tasks = await Task.find().lean();
        res.render('tasks/list', {tasks});
    }

    public static async renderTaskForm(req: Request, res: Response): Promise<void>{
        res.render('tasks/create');
    }
 
    // public static async createTask(req: Request<{},{}, createTaskType, ): Promise<void>{

    // }
    // public static async renderTask(req: Request, res: Response): Promise<void>{

    // }
    // public static async renderTask(req: Request, res: Response): Promise<void>{

    // }






}
    
    