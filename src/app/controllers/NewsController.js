class NewsController {

    //GET /news
    index(req, res) {
        res.render('../../resources/views/news.hbs');
    }

    //GET /news/slug

    edit(req, res) {
        res.send('New Detail');
    }
}

const newController = new NewsController;

export default newController;