import { SearchBar } from '@/components/SearchBar'
import React from 'react'

export const Search = () => {
  return (
    <div className="bg-red-500 h-28 w-full border-0 flex" id="search-bar">
        <div className="pt-5 w-500 h-3 m-2 flex flex-col items center min-w-20" id="search-bar-container">
          <div><SearchBar /></div>
          </div>
      </div>
  )
}
