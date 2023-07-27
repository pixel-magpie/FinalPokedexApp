import { Search } from '@/pages/Search'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <div className="bg-red-500 py-4 px-4 sticky top-0">
        <div className="container">
            <div className="flex justify-between items-center">
                <Link href="/">
                    <h2 className="text-white text-4xl">Pokedex</h2>
                </Link>

                <div className="place-items-end pl-10">
                    <Search />
                </div>

            </div>
        </div>
    </div>
  )
}
