// import models needed 'Thought' and 'User'
const { Thought, User } = require('../models');

const thoughtController = {
	// POST create thoughts
	addThought({ body }, res) {
		Thought.create(body)
			.then(dbThoughtData => {
				return User.findOneAndUpdate(
					{ _id: body.userId },
					{ $push: { thought: dbThoughtData._id } },
					{ new: true }
				)
			})
			.then(dbThoughtData => {
				res.json(dbThoughtData);
			})
			.catch(err => res.json(err));
	},

	// GET all thoughts 
	getAllThoughts(req, res) {
		Thought.find({})
			.select('-__v')
			.sort({ _id: -1 })
			.then((dbThoughtData) => res.json(dbThoughtData))
			.catch(err => {
				console.log(err);
				res.status(400).json(err);
			})
	},

	// GET thuoghts by id
	getThoughtById({ params }, res) {
		Thought.findOne({ _id: params.thoughtId })
			.select('-__v')
			.then((dbUserData) => {
				if (!dbUserData) {
					res.status(404).json({ message: 'No thoughts found with this id!' });
					return;
				}
				res.json(dbUserData);
			})
			.catch(err => {
				console.log(err);
				res.status(400).json(err);
			})
	},

	// UPDATE thoughts
	updateThought({ params, body }, res) {
		Thought.findOneAndUpdate(
			{ _id: params.thoughtId },
			body,
			{ new: true }
		)
			.select('-__v')
			.then(dbThoughtData => res.json(dbThoughtData))
			.catch(err => res.status(400).json(err));
	},

	// DELETE thoughts
	deleteThought({ params }, res) {
		Thought.findOneAndDelete({ _id: params.thoughtId })
			.then(deletedThought => {
				if (!deletedThought) {
					res.status(404).json({ message: 'Thought successfully deleted' });
					return;
				}
				res.json(deletedThought);
			})
			.catch(err => res.status(400).json(err));
	}
};

module.exports = thoughtController;