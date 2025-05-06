import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { questionRoute } from './routes/question.js'
import { answerRoute } from './routes/answer.js'

const app = new Hono()

app.use('*', cors({
  origin: 'http://localhost:5173'
}))

app.route('/question', questionRoute)
app.route('/answer', answerRoute)

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
