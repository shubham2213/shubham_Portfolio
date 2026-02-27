// Frontend-specific TypeScript interfaces

export interface MousePosition {
  x: number
  y: number
}

export interface ParticleFieldProps {
  mousePosition: React.RefObject<MousePosition>
}

export interface GridBackgroundProps {
  mousePosition: React.RefObject<MousePosition>
}
