import React from 'react'
import { SideBar } from './SideBar'
import { Search } from '@/pages/Search'
import { Card } from './Card'


export const Layout = ({ children }) => {
  return (
    <div>
      <Search />
      <div className="flex flex-row">
        <div className="basis-1/3"><SideBar /></div>
        <div className="basis-2/3"><Card /></div>
      </div>
    </div>
  )
}
