import  mongoose from 'mongoose';
const { Schema } = mongoose;

const TaskSchema = new Schema({
    title:{ type: String, required:true },
    description:{type: String, required:true },
    dateExpiration:{type : Date, required:true, default: Date.now()+5},
    statusTask:{ type: String, required:true }
})


module.exports = mongoose.model('Task', TaskSchema);