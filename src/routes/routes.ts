import { Express } from 'express';
import express from 'express'
import task from './task.ts'

export default function (app: Express) {
app
    .use(express.json())
    .use('/tasks', task)
}