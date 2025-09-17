'use client'

import Image from 'next/image'
import styles from './slider.module.css'
import { useState, useEffect } from 'react'
import SliderButtons from './slider-buttons'
import ArrowLeft from '../icons/arrow-left'
import ArrowRight from '../icons/arrow-right'
import Button from '../button'

interface SliderImage {
  src: string
  alt: string
  title?: string
  subtitle?: string
  buttonText?: string
  buttonLink?: string
}

interface SliderProps {
  images: SliderImage[]
  autoPlay?: boolean
  autoPlayInterval?: number
  showDots?: boolean
  showArrows?: boolean
}

export default function Slider({
  images,
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true
}: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(goToNext, autoPlayInterval)
    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval])

  if (!images || images.length === 0) {
    return <div className={styles.noImages}>No images provided</div>
  }

  return (
    <div className={styles.sliderContainer}>
      {/* Main slider container */}
      <div
        className={styles.sliderTrack}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <Image
              src={image.src}
              alt={image.alt}
              width={1920}
              height={750}
              className={styles.slideImage}
            />

            {/* Overlay content */}
            {(image.title || image.subtitle || image.buttonText) && (
              <div className={styles.overlay}>
                <div className={styles.contentContainer}>
                  <div className={styles.content}>
                    <span className={styles.subtitle}>{image.alt}</span>
                    <h2 className={styles.title}>{image.title}</h2>
                    <p className={styles.tag}>{image.subtitle}</p>
                    <Button
                      variant="outline"
                      className={styles.button}
                      onClick={() =>
                        image.buttonLink &&
                        window.open(image.buttonLink, '_blank')
                      }
                    >
                      {image.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {showArrows && images.length > 1 && (
        <div className={styles.arrowsContainer}>
          <SliderButtons
            onClick={goToPrevious}
            aria-label="Imagem anterior"
            disabled={currentIndex === 0}
          >
            <ArrowLeft />
          </SliderButtons>
          <SliderButtons
            onClick={goToNext}
            aria-label="Imagem seguinte"
            disabled={currentIndex === images.length - 1}
          >
            <ArrowRight />
          </SliderButtons>
        </div>
      )}
    </div>
  )
}
