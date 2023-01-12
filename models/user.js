const { Schema, model } = require('mongoose');
const userController = require('../controllers/user-controller');
const dateFormat = require('../utils/dateFormat');
// create User schema
const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: 'You need to provide a username!',
            trim: true
        },
        email: {
            type: String,
            required: 'You need to provide an email address!',
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);
// get total count of friends on retrieval
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
}
);
// create the User model using the UserSchema
const User = model('User', UserSchema);
// export the User model
module.exports = User;
////             if (!dbUserData) {
////                 res.status(404).json({ message: 'No user found with this id!' });
////                 return;
////             }
////             res.json(dbUserData);
////         }
////         )
////         .catch(err => res.json(err));
//// },
//// // add friend to user's friend list
module.exports = userController;