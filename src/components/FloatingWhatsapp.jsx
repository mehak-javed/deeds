import React from 'react'
import { MessageCircle } from 'lucide-react';

const FloatingWhatsapp = () => {
  return (
    <div>
        
        {/* Floating Chat Button */}
       <a
              href="https://wa.me/923354554666?text=Hi%20there%2C%20I%20have%20a%20question!"
              target="_blank"
              rel="noopener noreferrer"
            >
      <button className="fixed bottom-8 right-8 bg-themeClr text-white p-4 rounded-full shadow-2xl hover:bg-themeClr2 transition-all hover:scale-110">
        <MessageCircle className="w-6 h-6" />
      </button>
       </a></div>
  )
}

export default FloatingWhatsapp