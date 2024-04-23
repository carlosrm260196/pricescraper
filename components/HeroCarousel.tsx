"use client"
import Image from 'next/image';
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const heroImages = [
    {urlImage:"/assets/images/hero-1.svg", alt:"Smartwatch"},
    {urlImage:"/assets/images/hero-2.svg", alt:"bag"},
    {urlImage:"/assets/images/hero-3.svg", alt:"fryer"},
    {urlImage:"/assets/images/hero-4.svg", alt:"new stuff"},
    {urlImage:"/assets/images/hero-5.svg", alt:"book"}
]

const HeroCarousel = () => {
  return (
    <div className='hero-carousel'>
        <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={2000}
            showArrows={false}
            showStatus={false}
        >
            {heroImages.map((image)=>(
                <Image
                    src={image.urlImage}
                    alt={image.alt}
                    width={484}
                    height={484}
                    className='object-contain'
                    key={image.alt}
                />
            ))}
        </Carousel>
        <Image 
            src="assets/icons/hand-drawn-arrow.svg"
            alt='arrow' 
            height={175} 
            width={175}
            className='max-xl:hidden absolute -left-[15%] bottom-0'/>
    </div>
  )
}

export default HeroCarousel