import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "../components/pages/Home/Home"
import { Login } from "../components/pages/Login/Login"
import { SignUp } from "../components/pages/SignUp/SignUp"

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </>
  )
}
