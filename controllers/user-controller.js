const { User } = require('../models');

const UserController = {
	// GET all Users, /api/users
	getAllUser(req, res) {
		User.find({})
			// .populate to populate thoughts
			.populate({
				path: 'thoughts',
				// this tells mongoose that we don't care about __v field on thoughts 
				select: '-__v'
			})
			.select('-__v')
			.then(dbUserData => res.json(dbUserData))
			.catch(err => {
				console.log(err);
				res.status(400).json(err);
			});
	}
};