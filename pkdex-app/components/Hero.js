import React from 'react'

export const Hero = () => {
  return (
    <div className="bg-[url('/background.jpg')] bg-cover bg-fixed h-[calc(100vh-64px)] grid place-items-center">
      <div className="text-white text-2xl text-center bg-black/30 p-10 rounded-x1">
        Welcome to the Pokedex!
      </div>
    </div>
        
  )
}
