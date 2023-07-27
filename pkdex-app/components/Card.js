import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Card = ({img, name, types, onClick}) => {
  console.log(name)
  return (
    <div>
      <Link href={'/${name}'} className='bg-white hover:drop-shadow-md cursor-pointer' onClick={onClick}>
        <div className="flex justify-center py-4">
          <Image src={img} width={200} height={200} alt={name} />
        </div>
        <div className="p-8">
          <h2 className="text-2xl capitalize">{name}</h2>

          {/* card types */}
          <div className="flex items-center gap-4 mt-8">
            <h2 className="text-lg">Type:</h2>
            {types?.map((t) => (
              <span key={t.type.name} className="type">
                {t.type.name}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}
