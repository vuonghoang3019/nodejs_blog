import express from 'express';
import newController from '../app/controllers/NewsController.js'

const router = express.Router();

router.use('/:slug', newController.edit);

router.use('/', newController.index);


export default router