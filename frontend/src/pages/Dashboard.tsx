import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { BsSearch } from 'react-icons/bs'
import { FaRegBell } from 'react-icons/fa'

const userImg =
  "https://media.licdn.com/dms/image/D4D35AQE5osco-SJJ2Q/profile-framedphoto-shrink_400_400/0/1698775377644?e=1707332400&v=beta&t=R5wuOO67c6TyGvTZgPXShXU_M8v18-OP_09hlTs3CSk";

const dashboard = () => {
  return (
    <div className='admin-container'>
      <AdminSidebar />
      <main className='dashboard'>
        <div className='bar'>
          <BsSearch />
          <input type='text' placeholder='Search' />
          <FaRegBell/>
          <img className="user-img" src={userImg} alt="userImage" />
        </div>
      </main>
    </div>
  )
}

export default dashboard