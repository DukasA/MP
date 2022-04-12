const uuid = require('uuid');
const path = require('path');
const {Slider} = require('../models/models');
const ApiError = require('../error/ApiError');


class SliderController {
    async create(req, res, next) {
        try {
            const {id, title, text, link} = req.body;
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static/slider', fileName))

            const slide = await Slider.create({id, title, text, link, img: fileName });
            return res.json(slide);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {

        let slides = await Slider.findAll();

        return res.json(slides)
    }
}

module.exports = new SliderController();