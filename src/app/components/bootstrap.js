import sass from 'node-sass';
import npm from './npm.js';
import path from 'path';
import { fileURLToPath } from 'url';

function bootstrap(app, express) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    npm(app, path, __dirname);
    //scss
    sass.render({
        file: path.join(__dirname, 'resources/assets/scss/app.scss'),
    }, function(err, result) {});

    //Static
    app.use(express.static(path.join(__dirname, 'public')));

}

export default bootstrap;