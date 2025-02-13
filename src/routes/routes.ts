import { Express } from 'express';
import express from 'express'
import person from './user.ts'

export default function (app: Express) {
app
    .use(express.json())
    .use('/usuarios', person)
}