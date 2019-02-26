const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filmSchema= new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    genres: {
        type: [{type: String}],
        required: true      
    },
    duration: {
        type: String,
        reuired: true    
    },
    ratings: {
        type: [{type: Number}],
        required: false    
    },
    releaseDate: {
        type: String,
        required: true
    },
    averageRating: {
        type: Number,
        required: false
    },
    originalTitle: {
        type: String,
        required: false
    },
    storyLine: {
        type: String,
        required: true
    },
    actors: {
        type: [{type: String}],
        required: true
    },
    imdbRating: {
        type: Number,
        required: true
    },
    posteUrl: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('film', filmSchema)