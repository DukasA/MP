const uuid = require('uuid');
const path = require('path');
const {Post} = require('../models/models');
const ApiError = require('../error/ApiError');


class PostController {
    async create(req, res, next) {
        try {
            const {id, title, text} = req.body;
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static/post', fileName))

            const post = await Post.create({id, title, text, img: fileName });
            return res.json(post);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {

        let posts = await Post.findAll();

        return res.json(posts)
    }

    async deletePost(req, res) {
        try {
            /* console.log(req.body); */
            const id = req.body.id;
            await Post.destroy({where: { id : id }});

            return res.send({message: `Post with id: ${id} was deleted`});
        } catch (e) {
            return res.send(e.message);
        }
    }
}

module.exports = new PostController();