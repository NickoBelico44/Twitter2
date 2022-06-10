const express = require('express')
const appuserRouter = require('./routers/user/user.router')
const postRouter = require('./routers/post/post.router')

const app = express()

app.use(express.json())
app.use(appuserRouter)
app.use(postRouter)

app.listen(3000, () => {
  console.log('Express is running on port: 3000')
})