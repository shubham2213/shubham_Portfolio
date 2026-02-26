import { useEffect, useState } from 'react'

let ambientAudio: HTMLAudioElement | null = null
let blipAudio: HTMLAudioElement | null = null
let clickAudio: HTMLAudioElement | null = null

let isInitialized = false
let isSoundEnabled = false

const initializeAudio = () => {
  if (isInitialized) return

  try {
    ambientAudio = new Audio('/sounds/ambient-hum.mp3')
    ambientAudio.loop = true
    ambientAudio.volume = 0.15

    blipAudio = new Audio('/sounds/ui-blip.mp3')
    blipAudio.loop = false
    blipAudio.volume = 0.3

    clickAudio = new Audio('/sounds/ui-click.mp3')
    clickAudio.loop = false
    clickAudio.volume = 0.4

    isInitialized = true
  } catch (error) {
    console.error('Failed to initialize audio:', error)
  }
}

const playAmbient = async () => {
  if (!ambientAudio || !isSoundEnabled) return

  try {
    await ambientAudio.play()
  } catch (error) {
    console.warn('Ambient sound playback blocked by browser:', error)
  }
}

const stopAmbient = () => {
  if (!ambientAudio) return

  try {
    ambientAudio.pause()
    ambientAudio.currentTime = 0
  } catch (error) {
    console.error('Failed to stop ambient sound:', error)
  }
}

const playBlip = async () => {
  if (!blipAudio || !isSoundEnabled) return

  try {
    blipAudio.currentTime = 0
    await blipAudio.play()
  } catch (error) {
    console.warn('Blip sound playback blocked by browser:', error)
  }
}

const playClick = async () => {
  if (!clickAudio || !isSoundEnabled) return

  try {
    clickAudio.currentTime = 0
    await clickAudio.play()
  } catch (error) {
    console.warn('Click sound playback blocked by browser:', error)
  }
}

export function useSound() {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    initializeAudio()

    return () => {
      stopAmbient()
    }
  }, [])

  const toggle = async () => {
    if (!isInitialized) {
      initializeAudio()
    }

    isSoundEnabled = !isSoundEnabled
    setIsPlaying(isSoundEnabled)

    if (isSoundEnabled) {
      await playAmbient()
    } else {
      stopAmbient()
    }
  }

  return {
    isPlaying,
    toggle,
    playBlip,
    playClick,
  }
}
