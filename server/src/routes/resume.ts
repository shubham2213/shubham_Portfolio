import { Router } from 'express'
import { prisma } from '../prisma'

export const resumeRouter = Router()

// POST increment resume download count
resumeRouter.post('/download', async (req, res, next) => {
  try {
    const resume = await prisma.resumeLog.create({
      data: {
        downloadedAt: new Date()
      }
    })
    
    res.json({ success: true, id: resume.id })
  } catch (error) {
    next(error)
  }
})

// GET resume download count
resumeRouter.get('/stats', async (req, res, next) => {
  try {
    const count = await prisma.resumeLog.count()
    res.json({ totalDownloads: count })
  } catch (error) {
    next(error)
  }
})
