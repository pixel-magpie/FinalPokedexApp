import { SearchBar } from '@/components/SearchBar'
import React from 'react'

export const Search = () => {
  return (
    <div className="bg-slate-800 h-28 w-screen border-0" id="search-bar">
        <div className="pt-5 w-2/5 h-3 m-2 flex flex-col items center min-w-20" id="search-bar-container">
          <div><SearchBar /></div>
          <div>SearchResults</div>
          </div>
      </div>
  )
}
