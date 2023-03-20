class SiteController {

    //GET /
    index(req, res) {
        res.render('../../resources/views/home');
    }

    //GET /search

    search(req, res) {
        res.render('../../resources/views/search');
    }
}

const siteController = new SiteController;

export default siteController;