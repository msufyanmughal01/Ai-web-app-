import React from 'react'
import Users from './users'
import { useSession } from 'next-auth/react'

const Sidebar = () => {
  const {data : session} = useSession()
  return (
    <div className='flex flex-col w-[300px] border-r min-w-[300px] min-h-screen p-4'>
      <div className='grow'>menu {session?.user?.email} </div>
      <div>setting </div>
    </div>
  )
}

export default Sidebar
