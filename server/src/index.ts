import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import { projectsRouter } from './routes/projects'
import { viewsRouter } from './routes/views'
import { contactRouter } from './routes/contact'
import { resumeRouter } from './routes/resume'
import { errorHandler } from './middleware/errorHandler'
import { apiLimiter } from './middleware/rateLimiter'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

app.use(helmet())
app.use(cors({ origin: process.env.CLIENT_ORIGIN }))
app.use(express.json())
app.use('/api', apiLimiter)

app.use('/api/projects', projectsRouter)
app.use('/api/views',    viewsRouter)
app.use('/api/contact',  contactRouter)
app.use('/api/resume',   resumeRouter)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
