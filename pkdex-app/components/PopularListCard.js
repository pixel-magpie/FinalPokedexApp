import React from 'react'
import Link from 'next/link'

export const PopularListCard = ({img, name, types, onClick}) => {
  return (
    <Link href={'${name}'} className="bg-white shadow-2xl cursor-pointer" onClick={onClick}>
      <div clasName="flex py-4">
        <img src={img} width={200} height={200} alt={name} />
      </div>
      <div className="p-8">
        <h2 className="text-2xl capitalize">{name}</h2>
      </div>
    </Link>
  )
}
