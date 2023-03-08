import './App.css';
import React from 'react'
import Main from './components/Main';
import './components/style.css'
import Modal from './components/Modal';
import { Route,Routes } from 'react-router-dom';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/:BookId" element={<Modal/>}/>
    </Routes>
  )
}

export default App;