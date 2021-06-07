const Clarifai = require('clarifai');
require('dotenv').config();

const app = new Clarifai.App({
  apiKey: process.env.BRANIAC_API
});

const handleApiCall = (req, res) => {
    app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
        .then(data => {
            res.json(data);
        })
        .catch(err => res.status(400).json({ message: 'unable to connect to api' }))
}

const handleImageInput = (req, res, db) => {
    const { id } = req.body;
    db('users').where('id', '=', id)
        .increment(
            'entries', 1
    ).returning('entries')
        .then((entries) => {
            res.json(entries[0]);
        })
        .catch(err => res.status(400).json({ message: 'unable to retrieve entries' }));
}

module.exports = {
    handleImageInput,
    handleApiCall
}