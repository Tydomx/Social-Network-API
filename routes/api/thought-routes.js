const router = require('express').Router();

const {
	addThought,
	getAllThoughts,
	getThoughtById,
	updateThought,
	deleteThought,
	addReaction,
	deleteReaction
} = require('../../controllers/thought-controller');

// set up GET all and POST at /api/thoughts
router
	.route('/')
	.get(getAllThoughts)
	.post(addThought);


// set up GET by id, PUT by id, and DELETE by id at /api/thoughts/:id
router
	.route('/:thoughtId')
	.get(getThoughtById)
	.put(updateThought)
	.delete(deleteThought);


// set up POST for creating reaction(s) at /api/thoughts/:thoughtId/reactionId
router
	.route('/:thoughtId/:reactionId')
	.post(addReaction);


// set up DELETE for deleting reaction(s) at /api/thoughts/:thoughtId/:reactionId
router
	.route('/:thoughtId/:reactionId')
	.delete(deleteReaction);

module.exports = router;