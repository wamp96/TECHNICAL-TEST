import { Request , Response } from "express";
import Task from '../models/Task';
/**
     * Author: Willian Andres Moreno Prieto
     * Date:31/05/2024
     * Update Date:31/05/2024
     * Description: Esta clase es la encargada 
*/

export class TaskController {
    
    public static async renderTaskForm(req: Request, res: Response): Promise<void>{
        res.render('tasks/create');
    };
    
    public static async createTask(req: Request, res:Response ): Promise<void> {        
        const{title,description,dateExpiration,statusTask,user} = req.body;
        const error:{text:string}[]=[];
        
        //Validaciones de datos ingresados para confirma que no sean nulos
        if(!title){
            error.push({text:'El titulo es requerido'});
        }
        if(!description){
            error.push({text:'El description es requerido'});
        }
        if(!dateExpiration){
            error.push({text:'La fecha de expiracion es requerida'});
        }
        if(!statusTask){
            error.push({text:'El estado es requerido'});
        }
        
        if(error.length > 0){
            return res.render("tasks/",{
                title,
                description,
                dateExpiration,
                statusTask
            });
        }
        
        const newTask = new Task({title: String,description: String,dateExpiration: Date,statusTask: String})
        newTask.user = user;
        try {
            await newTask.save();
            req.flash("success_msg", "Tarea creada correctaemente");
            res.redirect("/tasks");
        } catch (error) {
            console.error("Error al creaer la tarea",error);;            
        }
    };
    
    public static async renderTasks(req: Request, res: Response): Promise<void>{
        const tasks = await Task.find().lean();
        res.render('/tasks/list', {tasks});
    };
    
    public static async renderEditForm(req: Request, res: Response): Promise<void>{
        
    };

    public static async updateTask(req: Request, res: Response): Promise<void>{

    };

    public static async deleteTask(req: Request, res: Response): Promise<void>{

    };

}
    
    