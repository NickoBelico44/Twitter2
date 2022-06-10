const express = require('express')
const expressAsyncHandler = require('express-async-handler')

const postAppuser = require('../../handlers/users/post-appuser')
const appuserRouter = express.Router()

appuserRouter.post('/users', expressAsyncHandler(postAppuser))

module.exports = appuserRouter