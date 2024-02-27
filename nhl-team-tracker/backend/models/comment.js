// Require the Mongoose package
const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        content: { type: String, required: true },
        title: { type: String, maxLength: 30 },
        teamId: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Comment', commentSchema)