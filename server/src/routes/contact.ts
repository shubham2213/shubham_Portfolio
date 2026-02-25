import { Router } from 'express'
import { prisma } from '../prisma'

export const contactRouter = Router()

// POST create contact message
contactRouter.post('/', async (req, res, next) => {
  try {
    const { name, email, message } = req.body
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' })
    }
    
    const contact = await prisma.message.create({
      data: {
        name,
        email,
        message
      }
    })
    
    res.status(201).json({ success: true, id: contact.id })
  } catch (error) {
    next(error)
  }
})

// GET all contact messages (admin only - add auth middleware later)
contactRouter.get('/', async (req, res, next) => {
  try {
    const contacts = await prisma.message.findMany({
      orderBy: { createdAt: 'desc' }
    })
    res.json(contacts)
  } catch (error) {
    next(error)
  }
})
