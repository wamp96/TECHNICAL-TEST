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
        const{title,description,dateExpiration,statusTask} = req.body;
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
            return res.render("tasks/create",{
                error,
                title,
                description,
                dateExpiration,
                statusTask
            });
        }
            else{
            const newTask = new Task({title: String,description: String,dateExpiration: Date,statusTask: String})
            try {
                await newTask.save();
                req.flash("success_msg", "Tarea creada correctamente");
                res.redirect("/tasks/list");
            } catch (error) {
                console.error("Error al crear la tarea",error);;            
            }            
        }       
    };
    
    public static async renderTasks(req: Request, res: Response): Promise<void> {
        const tasks = await Task.find().sort({date: 'desc'});
        res.render('/tasks/list', {tasks});
    };
    
    public static async deleteTask(req: Request, res: Response): Promise<void>{
        await Task.findByIdAndDelete(req.params.id);
        res.redirect('/tasks/list');
    };

    public static async renderEditForm(req: Request, res: Response): Promise<void>{
        const task = await Task.findById(req.params.id)
        res.render('/tasks/edit',{task});
    };

    public static async updateTask(req: Request, res: Response): Promise<void>{
        const {title,description,dateExpiration,statusTask} = req.body;
        await Task.findByIdAndUpdate(req.params.id, {title, description, dateExpiration, statusTask});
        res.redirect('/tasks/list');
    };
}

    