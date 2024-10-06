import express from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(globalErrorHandler)

export default app
