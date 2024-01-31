import React from 'react'
import AdminSidebar from '../components/AdminSidebar'

const dashboard = () => {
  return (
    <div className='admin-container'>
      <AdminSidebar />
      <main>Dashboard Page</main>
    </div>
  )
}

export default dashboard