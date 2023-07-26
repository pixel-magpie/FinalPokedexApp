import React, { useState } from 'react'
import { PokeList } from './PokeList';



export const SideBar = () => {

    const [open, setOpen] = useState(true);

  return (
    <div className="flex">
        <div className="object-cover absolute mix-blend-normal">
            <div className="w-72 h-screen bg-dark-cyan relative" >
                {/* <img src="/control.png" onClick={() => setOpen(!open)} className="absolute cursor-pointer -right-2 top-9 w-7 border-2 border-dark-cyan rounded-full" /> */}
                <div className="p-7 text-2xl font-semibold">
                    <div className="fixed">
                        <PokeList />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
