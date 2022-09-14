import express, {Request, Response} from 'express';

const app = express();

app.get('/ads', (req: Request, res: Response)=> {
    return res.json([
        {
            id: '1',
            name: 'anuncio 1'
        },
        {
            id: '2',
            name: 'anuncio 2'
        },
        {
            id: '3',
            name: 'anuncio 3'
        },
        {
            id: '4',
            name: 'anuncio 4'
        },
    ]);
})

app.listen(3000, ()=> {
    console.log('Listening at localhost:3000');
})