import express from 'express'
import serveStatic from 'serve-static'
import { resolve, join } from 'path'

const app = express()

app.use(serveStatic(join(resolve(), '../client/dist')))

app.get('/api', (req, res) => {
    res.json(({
        test: 1
    }))
})

const port = process.env.PORT || 88
app.listen(port, () => console.log(`Listening on http://localhost:${port}`))
