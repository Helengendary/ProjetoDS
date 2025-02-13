import express, { Request, Response, Router } from 'express';

interface User {
    nome:string,
    sobrenome: string,
    idadeAtual: number
}

const router: Router = express.Router();
const people: User[] = [];


router
.post('', (req: Request, res: Response) => {
        
        const { nome, sobrenome, idade} = req.body

        if (nome == null || sobrenome == null || idade == null) {
            
            res.status(401).send(`Existe um valor nulo`);
        } else {
            people.push({nome: nome, sobrenome: sobrenome, idadeAtual: idade})
            res.status(200).send(`Pessoa ${nome} ${sobrenome} recebida com sucesso!`);
        }
})  

.get('', (req: Request, res: Response) => {
    res.status(200).send(people);
})

.get('/:id', (req: Request, res: Response) => {
    const { id } = req.params

    if (people.length < Number(id)+1) {
        res.status(404).send('Este index não existe');    
    } else {
        res.status(200).send(people[Number(id)]);
    }

})

.put('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const { nome, sobrenome, idade } = req.body;
    
    if (nome == null || sobrenome == null || idade == null) {
        res.status(401).send(`Existe um valor nulo`);
    } else {
        people[Number(id)].nome = nome
        people[Number(id)].sobrenome = sobrenome
        people[Number(id)].idadeAtual = idade
        res.status(200).send(`Pessoa com o id: ${id} foi atualizado para
            ${nome} ${sobrenome}`)
    }

    
})

// .patch('/atualizar/:id', (req: Request, res: Response) => {
//     const { id } = req.params;
//     const { nome } = req.body;

//     // Suponhamos que você atualize a pessoa aqui
//     res.send(`Nome da pessoa com ID ${id} foi atualizado para: ${nome}`);
// });

export default router;