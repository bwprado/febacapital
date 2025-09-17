'use server'

import slider from '../mock/slider.json'

interface RealState {
  alt: string
  buttonLink: string
  buttonText: string
  src: string
  subtitle: string
  title: string
}

export async function getRealStates(): Promise<RealState[]> {
  const data = slider.images
  return data
}
