// importing dependencies
// schema constructor and model function
const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
	{
		// username column
		username: {
			type: String,
			unique: true,
			required: true,
			trim: true
		},
		// email column with validator
		email: {
			type: String,
			required: true,
			unique: true,
			match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
		},
		// one to many relationship
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
			virtual: true
		},
		id: false
	}
);

// adding 'Virtual' to add more information to DB response so tha we don't have to add in information manually
UserSchema.virtual('friendCount').get(function () {
	return this.friends.length;
});

// create User model using UserSchema
const User = model('User', UserSchema);

// export User mdoel
module.exports = User;