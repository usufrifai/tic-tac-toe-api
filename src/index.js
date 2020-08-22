
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {routerList} from './routers'

const app = new express();
const port = process.env.PORT || 9000;
  
app.use(bodyParser.json());
app.use(cors())

app.get('/healthcheck', (req, res) => {
   res.status(200);
   res.send('server up');
});

app.use('/api', routerList);

app.listen(port,() => {
    console.log(`Starte${port}d`);
})