import express, { Request, Response, Router } from 'express';

interface User {
    nome:string,
    sobrenome: string,
    idadeAtual: number
}

const router: Router = express.Router();
let people: User[] = [];


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
        res.status(200).send(`Pessoa com o id: ${id} foi atualizado para ${nome} ${sobrenome}`)
    }
})

.patch('/atualizar/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const { nome, sobrenome, idade } = req.body;
      
    if (nome != null) {
        people[Number(id)].nome = nome
    } 
    
    if (sobrenome != null) {
        people[Number(id)].sobrenome = sobrenome
    }

    if (idade != null) {
        people[Number(id)].idadeAtual = idade
    }

    res.status(200).send(`Atualizado`)
})

.delete('/:id', (req: Request, res: Response) => {
    const { id } =  req.params;
    if (Number(id) >= people.length) {
        res.status(404).send(`Este index não existe`)
    }
    if (Number(id) == people.length-1) {
        let array: User[] = [];
        for (let index = 0; index < people.length-1; index++) {
            array[index] = people[index] 
        }
        people = array 
    } else {
        for (let index = Number(id); index < people.length-1; index++) {           
            people[index] = people[index+1]
        }
    }
})

export default router;