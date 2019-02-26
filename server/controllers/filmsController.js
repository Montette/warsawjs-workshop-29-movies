const Film = require('../models/filmModel');

exports.get = (req, res) => {
    Film.find((error, data)=> {
        if(error) {
            res.json({
                status: 'error',
                message: 'something went wrong'
            });
        }

        res.json({
            status: 'success',
            message: 'fims retrieved succesfully',
            data
        });
    });
}

exports.view = (req, res) => {
    console.log(req.params);
    Film.find({id: req.params.film_id}, (error, data) => {
        if(error) {
            res.json({
                status: 'error',
                message: 'Cannot find film with this id in database'
            })
        }

        res.json({
            status: 'success',
            message: 'fim retrieved succesfully',
            data
        })
    })
}

exports.remove = (req, res) => {
    Film.remove({
        id: req.params.film_id
    }, (error, film) => {
        if(error) res.send(error);

        res.json({
            status: 'success',
            message: 'Film was deleted'
        })
    })
}