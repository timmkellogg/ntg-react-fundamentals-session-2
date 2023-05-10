import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './NavBar'
import ToDoList from './ToDoList'
import Counter from './Counter'
import ControlledForm from './ControlledForm'
import Jeopardy from './Jeopardy'

function App() {

  return (
      <Router>
        <NavBar />
        
        <Routes>
          <Route path='/' element={<div>This is my default location</div>} />

          <Route path='/todo-list' element={<ToDoList />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/controlled-form' element={<ControlledForm />} />
          <Route path='/jeopardy' element={<Jeopardy />} />
          
          <Route path='/*' element={<div>404: Page Not Found</div>}/>
        </Routes>


      </Router>
  );
}

export default App;
