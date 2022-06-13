import React from "react"
import { Route, Routes } from "react-router-dom"
import { SignUp } from "../components/pages/SignUp/SignUp"

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp />} />
      </Routes>
    </>
  )
}
