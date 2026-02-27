import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useParallax } from '@/hooks/useParallax'

interface ParticleFieldProps {
  mousePosition: React.RefObject<{ x: number; y: number }>
}

interface ParticleData {
  position: THREE.Vector3
  origin: THREE.Vector3
  velocity: THREE.Vector3
}

const Particles: React.FC<ParticleFieldProps> = ({ mousePosition }) => {
  const pointsRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)
  
  const [particleCount] = useState(() => {
    const width = window.innerWidth
    if (width < 768) return 0
    if (width < 1024) return 40
    return 80
  })

  const [particles] = useState<ParticleData[]>(() => {
    if (particleCount === 0) return []
    
    return Array.from({ length: particleCount }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10
      ),
      origin: new THREE.Vector3(0, 0, 0),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01
      ),
    }))
  })

  useEffect(() => {
    particles.forEach((p) => {
      p.origin.copy(p.position)
    })
  }, [particles])

  useFrame(() => {
    if (!pointsRef.current || particleCount === 0) return

    const positions = pointsRef.current.geometry.attributes.position
    const mouse = mousePosition.current
    const mouseVector = new THREE.Vector3(
      (mouse.x / window.innerWidth) * 20 - 10,
      -(mouse.y / window.innerHeight) * 15 + 7.5,
      0
    )

    particles.forEach((particle, i) => {
      particle.position.x += particle.velocity.x * 0.0005
      particle.position.y += particle.velocity.y * 0.0005
      particle.position.z += particle.velocity.z * 0.0005

      const distanceToMouse = particle.position.distanceTo(mouseVector)
      const mouseInfluenceRadius = 100 / 50

      if (distanceToMouse < mouseInfluenceRadius) {
        const force = (1 - distanceToMouse / mouseInfluenceRadius) * 0.02
        const direction = new THREE.Vector3()
          .subVectors(particle.position, mouseVector)
          .normalize()
        
        particle.position.add(direction.multiplyScalar(force))
      }

      const toOrigin = new THREE.Vector3()
        .subVectors(particle.origin, particle.position)
        .multiplyScalar(0.005)
      particle.position.add(toOrigin)

      positions.setXYZ(i, particle.position.x, particle.position.y, particle.position.z)
    })

    positions.needsUpdate = true

    if (linesRef.current) {
      const linePositions: number[] = []
      const connectionDistance = 150 / 50

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = particles[i].position.distanceTo(particles[j].position)
          
          if (distance < connectionDistance) {
            linePositions.push(
              particles[i].position.x,
              particles[i].position.y,
              particles[i].position.z,
              particles[j].position.x,
              particles[j].position.y,
              particles[j].position.z
            )
          }
        }
      }

      const lineGeometry = linesRef.current.geometry
      lineGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(linePositions, 3)
      )
      lineGeometry.attributes.position.needsUpdate = true
    }
  })

  useEffect(() => {
    const points = pointsRef.current
    const lines = linesRef.current
    
    return () => {
      if (points) {
        points.geometry.dispose()
        if (Array.isArray(points.material)) {
          points.material.forEach((m) => m.dispose())
        } else {
          points.material.dispose()
        }
      }
      if (lines) {
        lines.geometry.dispose()
        if (Array.isArray(lines.material)) {
          lines.material.forEach((m) => m.dispose())
        } else {
          lines.material.dispose()
        }
      }
    }
  }, [])

  if (particleCount === 0) return null

  const positions = new Float32Array(particleCount * 3)
  particles.forEach((particle, i) => {
    positions[i * 3] = particle.position.x
    positions[i * 3 + 1] = particle.position.y
    positions[i * 3 + 2] = particle.position.z
  })

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={1.5 / 50}
          color="#00f5ff"
          transparent
          opacity={0.6}
          sizeAttenuation={false}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array(0), 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00f5ff"
          transparent
          opacity={0.15}
        />
      </lineSegments>
    </>
  )
}

const ParticleFieldCanvas: React.FC<ParticleFieldProps> = ({ mousePosition }) => {
  const isMobile = window.matchMedia('(max-width: 767px)').matches
  
  // Layer 2 — Particle field with medium parallax (4% movement)
  const canvasRef = useParallax<HTMLDivElement>({
    multiplier: 0.04,
    maxOffset: 50,
  })
  
  if (isMobile) return null

  return (
    <div
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        pointerEvents: 'none',
        willChange: 'transform',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Particles mousePosition={mousePosition} />
      </Canvas>
    </div>
  )
}

export const ParticleField = React.lazy(() =>
  Promise.resolve({ default: ParticleFieldCanvas })
)
