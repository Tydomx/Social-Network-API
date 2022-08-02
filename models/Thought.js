// importing dependencies
// schema constructor and model function
const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


// reactionSchema
const ReactionSchema = new Schema(
	{
		// reaction id column
		reactionId: {
			type: Schema.Types.ObjectId,
			default: () => new Types.ObjectId()
		},
		reactionBody: {
			type: String,
			required: true,
			maxlength: 280
		},
		username: {
			type: String,
			required: true
		},
		createdAt: {
			type: Date,
			// uses the current timestamp
			default: Date.now,
			// this formats the current timestamp
			get: createdAtVal => dateFormat(createdAtVal)
		}
	},
	{
		toJSON: {
			getters: true
		},
		id: false
	}
);

// thoughtSchema
const ThoughtSchema = new Schema(
	{
		thoughtText: {
			type: String,
			required: true,
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
			required: true
		},
		// reactions field populated with array of data that adheres to ReactionSchema definition
		// use ReactionSchema to validate data for a reaction
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

ThoughtSchema.virtual('reactionCount').get(function () {
	return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;