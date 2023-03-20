import express from 'express';
import route from './routes/index.js';
import bootstrap from './app/components/bootstrap.js';

const app = express();

bootstrap(app, express);

route(app);

//Middleware
app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on po rt ${port}`)
})