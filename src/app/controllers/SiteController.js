import Course from "../models/Course.js";
import {multipleMongooseObject} from '../../util/mongoose.js';
class SiteController {
    //GET /
    index(req, res, next) {
        Course.find({})
        .then(courses => {
            res.render('../../resources/views/home', { courses: multipleMongooseObject(courses) })
        })
        .catch(next);
        
    }

    //GET /search

    search(req, res) {
        res.render("../../resources/views/search");
    }
}

const siteController = new SiteController();

export default siteController;
