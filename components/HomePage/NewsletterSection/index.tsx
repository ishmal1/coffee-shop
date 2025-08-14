import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import React from 'react'

function NewsletterSection() {
  return (
   
     <div className="bg-[#E0E1DA] lg:py-20 md:p-10 flex flex-col items-center text-center px-4">
  <h3 className="text-6xl mb-4">Newsletter</h3>
  <p className="text-gray-700 mb-6 max-w-xl">
   The latest coffees, offers and news from the Clifton.s
  </p>

  <div className="w-full max-w-md relative">
  <input
    type="email"
    placeholder="Enter your email"
    className="w-full px-4 py-3 border-black border-2 rounded-full pr-12 focus:outline-none "
  />

  <Button
    variant="default"
    className="absolute top-1/2 right-0 -translate-y-1/2 w-13 h-13 bg-black text-white rounded-r-full flex items-center justify-center "
  >
    <ChevronRight className="w-5 h-5" />
  </Button>
</div>
</div>
   
  )
}

export default NewsletterSection
