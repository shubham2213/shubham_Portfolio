import { Router } from 'express'
import { prisma } from '../prisma'

export const projectsRouter = Router()

// GET all projects
projectsRouter.get('/', async (req, res, next) => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' }
    })
    res.json(projects)
  } catch (error) {
    next(error)
  }
})

// GET single project by id
projectsRouter.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const project = await prisma.project.findUnique({
      where: { id }
    })
    
    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }
    
    res.json(project)
  } catch (error) {
    next(error)
  }
})
