const { Schema, model } = require('mongoose');
const thoController = require('../controllers/tho-controller');

const thoSchema = new Schema(
    {
        thoText: {
            type: String,
            required: 'You need to provide a tho!',
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: 'You need to provide a username!'
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const User = model('tho', thoSchema);
module.exports = thoController;