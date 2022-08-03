const { User } = require('../models');

const userController = {
	// GET all Users, /api/users
	getAllUser(req, res) {
		User.find({})
			// // .populate to populate thoughts
			// .populate({
			// 	path: 'thoughts',
			// 	// this tells mongoose that we don't care about __v field on thoughts 
			// 	select: '-__v'
			// })
			.select('-__v')
			.then(dbUserData => res.json(dbUserData))
			.catch(err => {
				console.log(err);
				res.status(400).json(err);
			});
	},
	// GET One user by id
	getUserById({ params }, res) {
		User.findOne({ _id: params.userId })
			// .populate({
			// 	path: 'thoughts',
			// 	select: '-__v'
			// })
			.select('-__v')
			.then(dbUserData => {
				// if no user found, send 404
				if (!dbUserData) {
					res.status(404).json({ message: 'No user found with this id!' });
					return;
				}
				res.json(dbUserData);
			})
			.catch(err => {
				console.log(err);
				res.status(400).json(err);
			});
	},
	// POST create user
	createUser({ body }, res) {
		User.create(body)
			.then(dbUserData => res.json(dbUserData))
			.catch(err => res.status(400).json(err));
	},
	// PUT update user by id
	updateUser({ params, body }, res) {
		User.findOneAndUpdate({ _id: params.userId }, body, { new: true, runValidators: true })
			.then(dbUserData => {
				if (!dbUserData) {
					res.status(404).json({ message: 'No user found with this id!!' });
					return;
				}
				res.json(dbUserData);
			})
			.catch(err => res.status(400).json(err));
	},

	// DELETE route /api/users/:id
	deleteUser({ params }, res) {
		User.findOneAndDelete({ _id: params.userId })
			.then(dbUserData => {
				if (!dbUserData) {
					res.status(404).json({ message: 'No user found with this id to delete!' });
					return;
				}
				res.json(dbUserData);
			})
			.catch(err => res.status(400).json(err));
	},

	// POST add a new friend to user's friend list
	addFriend({ params }, res) {
		User.findOneAndUpdate(
			{ _id: params.userId },
			{ $push: { friends: params.friendId } },
			{ new: true }
		)
			.populate({ path: 'friends', select: ('-__v') })
			.select('-__v')
			.then(dbUserData => {
				if (!dbUserData) {
					res.status(400).json({ message: 'No user with this id!' });
					return;
				}
				res.json(dbUserData);
			})
			.catch(err => res.json(err));
	},

	// DELETE to remove a friend from a user's friend lsit
	removeFriend({ params }, res) {
		User.findOneAndUpdate(
			{ _id: params.userId },
			{ $pull: { friends: params.friendId } },
			{ new: true }
		)
			.select('-__v')
			.then((dbUserData) => {
				if (!dbUserData) {
					res.status(404).json({ message: 'No user found with this id!' });
					return;
				}
				res.json(dbUserData);
			})
			.catch(err => res.status(400).json(err));
	}
};

module.exports = userController;