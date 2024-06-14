import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Headers from './header'
import Login from './login';
import ImageGenerator from './imageGenerator';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Headers />}>
          <Route path="image" element={<ImageGenerator/>} />
          <Route index element={<Login/>} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router