import mongoose, {Schema, Document} from "mongoose";
import express, {Router, Request, Response} from 'express';

interface ITarefa extends Document{
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const tarefaSchema: Schema = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: false},
    completed: { type: Boolean, required: true},
    createdAt: { type: Date, required: true},
    updatedAt: { type: Date, required: true},
})

const Tarefa = mongoose.model<ITarefa>(`Tarefa`, tarefaSchema);

export default Tarefa