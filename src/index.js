import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import path from 'path';
import sass from 'node-sass';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const port = 3000;

//Static
app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//scss
sass.render({
  file: path.join(__dirname, 'resources/assets/scss/app.scss'),
}, function(err, result) {

});

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
    res.render('news');
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})