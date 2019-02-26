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