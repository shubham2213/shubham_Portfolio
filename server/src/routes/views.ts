import { Router } from 'express'
import { prisma } from '../prisma'

export const viewsRouter = Router()

// POST increment view count for a project
viewsRouter.post('/:projectId', async (req, res, next) => {
  try {
    const { projectId } = req.params
    
    const project = await prisma.project.update({
      where: { id: projectId },
      data: {
        viewsCount: {
          increment: 1
        }
      }
    })
    
    res.json({ viewsCount: project.viewsCount })
  } catch (error) {
    next(error)
  }
})
