import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import React from 'react'

function VirtualToursSection() {
  return (
 <div className="flex flex-col md:flex-row items-center mx-6 gap-3 w-full my-17 h-full">
  <div className=" flex flex-col justify-center items-center gap-6 px-4">
    <h2 className="lg:text-6xl md:text-4xl   ">Virtual Tours</h2>
    <p className="text-base max-w-lg ">
      Come and have a walk through our HQ, take a look at our roastery, training room, showrooms, cupping room and engineering bay! A little bit on Future Virtual Ltd – We are a Brighton & Bristol based family business, covering the whole of the UK. We are leading the way in creating stunning, fully immersive & interactive 360 virtual tours across all industries such as business.
    </p>
    <Button variant="outline" className="w-32 rounded-full border-black border-2 px-2 bg-transparent hover:bg-black hover:text-white">Read more</Button>
  </div>
    <Card className="max-w-3xl  h-full  overflow-hidden group mr-2 py-0 relative">
      <img
        src="/HomePage/VirtualTours/image-virtualtours.png"
        alt="Product"
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
      />
      <img
        src="/HomePage/VirtualTours/hover-image-virtualtours.png"
        alt="Product hover"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </Card>
  </div>

  )
}

export default VirtualToursSection
