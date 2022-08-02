// importing router dependency
const router = require('express').Router();

const { getAllUser } = require('../../controllers/user-controller');

// set up GET all /api/users
router
	.route('/')
	.get(getAllUser);


module.exports = router;