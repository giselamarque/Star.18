const { thought, user } = require('../models');

const thoController = {
    // get all thoughts
    getAllThought(req, res) {
        thought.find({})
            .populate({
                path: 'reactions',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            }
            );
    },
}

module.exports = thoController;

// Path: controllers/user-controller.js
const { thought, user } = require('../models');

const userController = {
    // get all users
    getAllUser(req, res) {
        user.find({})
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .populate({
                path: 'friends',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            }
            );
    }
}
addThought({ params, body }, res) 
{
    thought.create(body)
        .then(({ _id }) => {
            return user.findOneAndUpdate(
                { _id: params.userId },
                { $push: { thoughts: _id } },
                { new: true }
            );
        }
        )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        }
        )
        .catch(err => res.json(err));
}

module.exports = thoController;