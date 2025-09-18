export interface Venture {
  id: string
  name: string
  image: string
  isPreLaunch?: boolean
  isLarge?: boolean
  city?: string
  neighborhood?: string
  features?: string[]
}

export async function getVentures(): Promise<Venture[]> {
  return [
    {
      id: '1',
      name: 'HORIZONTE RESIDENCE',
      image: '/images/slider-1.png',
      isPreLaunch: true,
      isLarge: true
    },
    {
      id: '2',
      name: 'ONE TOWER',
      image: '/images/slider-2.png'
    },
    {
      id: '3',
      name: 'INFINITY COAST',
      image: '/images/slider-3.png'
    },
    {
      id: '4',
      name: 'SKYLINE TOWER',
      image: '/images/slider-1.png'
    },
    {
      id: '5',
      name: 'GRANDE PLACE TOWER',
      image: '/images/slider-2.png'
    },
    {
      id: '6',
      name: 'IMPERIUM TOWER',
      image: '/images/slider-3.png'
    },
    {
      id: '7',
      name: 'TITANIUM TOWER',
      image: '/images/slider-1.png'
    },
    {
      id: '8',
      name: 'BLUE COST TOWER',
      image: '/images/slider-2.png'
    },
    {
      id: '9',
      name: 'GRAND PLACE TOWER',
      image: '/images/slider-3.png'
    }
  ]
}
