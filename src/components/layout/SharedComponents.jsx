import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import { Slider } from '../Slider'

export default function SharedComponents() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
    

  )
}
