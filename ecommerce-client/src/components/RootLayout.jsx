import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const RootLayout = ({user, setUser}) => {
  return (
    <div>
      <Header  user={user} setUser={setUser} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout
