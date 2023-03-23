import newsRouter from "./news.js";
import SiteRouter from "./site.js";

function route(app) {
    // app.get('/', (req, res) => {
    // 	res.render('home');
    // })

    app.use("/news", newsRouter);

    app.use("/", SiteRouter);

    // app.get('/search', (req, res) => {
    // 	console.log(req.query.q);
    // 	res.render('search');
    // })

    // app.post('/search', (req, res) => {
    // 	console.log(req.body);
    // 	res.render('search');
    // })
}

export default route;
