import express, { Request, Response, Router } from 'express';
import Task from '../models/tarefa.ts'

const router: Router = express.Router();


router
.post('', (req: Request, res: Response) => {
        
       const { title, description, completed, createdAt, updatedAt}  = req.body

       try {
        const task = new Task({title, description, completed, createdAt, updatedAt });
        task.save();
        res.status(201).json(task);
       } catch (error) {
        res.status(400).json({ message: 'Erro ao criar pessoa', error})
       }
})  



export default router;