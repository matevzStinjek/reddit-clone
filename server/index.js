const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()
app.use(serveStatic(path.join(__dirname, '../client/dist')))
const port = process.env.PORT || 88
app.listen(port, () => console.log(port))
