const express = require('express')
const expressAsyncHandler = require('express-async-handler')

const postPost = require('../../handlers/post/post-a-post')
const postPostRouter = express.Router()

postPostRouter.post('/post', expressAsyncHandler(postPost))

module.exports = postPostRouter