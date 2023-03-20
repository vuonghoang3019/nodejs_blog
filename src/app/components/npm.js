import { engine } from 'express-handlebars';
import morgan from 'morgan';

function npm(app, path, __dirname) {
    // HTTP Logger
    app.use(morgan('combined'))

    //Template engine
    app.engine('hbs', engine({
        extname: '.hbs'
    }));
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, '../../resources/views'));
}

export default npm;