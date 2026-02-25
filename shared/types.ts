// Used by both client and server

export interface ApiResponse<T = null> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface ProjectDTO {
  id: string
  slug: string
  title: string
  client: string
  type: 'client' | 'personal'
  description: string
  impact: string[]
  tags: string[]
  liveUrl?: string | null
  githubUrl?: string | null
  accentColor: 'cyan' | 'green' | 'mixed'
  viewsCount: number
}

export interface ContactPayload {
  name: string
  email: string
  message: string
}

export interface ViewsResponse {
  viewsCount: number
}
