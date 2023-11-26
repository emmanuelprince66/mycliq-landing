import React from 'react'
import { Sidebar } from '../components/sidebar'
import { Topbar } from '../components/topbar'

export const Mainlayout = () => {
  return (
    <div className='flex' >
      <Sidebar/>
      <Topbar/>

    </div>
  )
}
