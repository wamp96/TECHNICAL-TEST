import { Request , Response } from "express";
import Task from '../models/Task';
/**
     * Author: Willian Andres Moreno Prieto
     * Date:31/05/2024
     * Update Date:02/05/2024
     * Description: Esta clase es la encargada de manejar todos los metodos  para interactuar con las tareas
*/

export class TaskController {
    /**
     * Metodo que permite mostrar el formulario para crear la nueva tarea 
     * @param res Se renderiza la vista ubicada en la ruta relacionada
     * El retorno de la funcion sera el formulario que permitira crear la nueva tarea
     */
    public static async renderTaskForm(req: Request, res: Response): Promise<void>{
        res.render('tasks/create');
    };
    
    /**
     * Este metodo es el encargado de crear una nueva tarea y enviarla a la base de datos
     * @param req metodo utilizado en el req.body contiene los datos enviados al cuerpo de la solicitud,
     * adicional se tambien se realiza el uso con req.flash para realizar el envio un mensaje al usuario 
     * @param res metodo utilizado en res.render para renderizar la vista y agregar los errores alojados en el objeto error[]
     * @returns El retorno del metodo son los datos en formato JSON y el envio de los mismos a la base de datos para la creacion de usuario
     */
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
            const newTask = new Task({title,description,dateExpiration: new Date(dateExpiration),statusTask})
            try {
                await newTask.save();
                req.flash("success_msg", "Tarea creada correctamente");
                res.redirect("/tasks/list");
            } catch (error) {
                console.error("Error al crear la tarea",error);;            
            }            
        }       
    };
    
    /**
     * Esta metodo nos permite obtener los datos, se realiza el recorrido del modelo Task y obtiene sus datos 
     * colocandolos de manera decendente, una vez se cumple esa problemas los datos son guardados en la constante task 
     * @param res Se renderiza la vista con res.render lo cual permite tener la vista con los datos alojados en la constante tasks
     * @returns El retorno de este meetodo sera la vista con los todos los datos que se han creado
     */
    public static async renderTasks(req: Request, res: Response): Promise<void> {
        const tasks = await Task.find().sort({date: 'desc'});
        res.render('tasks/list', {tasks});
    };
    

    /**
     * Este metodo nos permite eliminar la tarea de la base de datos segun el id recibido, 
     * una vez eliminado el dato sera redirecionada al listado de tareas
     * @param req con el metodo req.params.id podremos obtener el identificador unico de la tarea
     * luego de obtener, se procede a eliminar con el metodo findByIdAndDelete 
     * @param res con este parametro podremos redireccionar una vez cumplida la promesa 
     * @returns El rentorno de esta funcion sera el redirecionamiento a la pagina list
     */
    public static async deleteTask(req: Request, res: Response): Promise<void>{
        await Task.findByIdAndDelete(req.params.id);
        req.flash("success_msg", "Tarea eliminada correctamente");
        res.redirect('/tasks/list');
    };

    /**
     * Metodo que permite mostrar el formulario para edita una tarea  
     * @param req Se renderiza la vista ubicada en la ruta relacionada
     * @returns El formulario para editar una tarea
     */
    public static async renderEditForm(req: Request, res: Response): Promise<void>{
        const task = await Task.findById(req.params.id)
        res.render('tasks/edit',{task});
    };

    /**
     * Metodo que permite actualizar los datos de una tarea 
     * @param req parametro utilizado en el req.body contiene los datos enviados al cuerpo de la solicitud ,
     * req.params.id podremos obtener el identificador unico sus datos segun corresponda, luego seran actualizados con el metodo
     * findByIdAndUpdate el cual nos trae ya mongosee
     * @param res Se redireciona al cumplir la promesa a la ruta indicada en el cuerpo del correo 
     * @returns El retorno de esta funcion sera la actualizacion de los datos
     */
    public static async updateTask(req: Request, res: Response): Promise<void>{
        const {title,description,dateExpiration,statusTask} = req.body;
        await Task.findByIdAndUpdate(req.params.id, {title, description, dateExpiration, statusTask});
        req.flash("success_msg", "Tarea actualizada correctamente");
        res.redirect('/tasks/list');
    };
}

    