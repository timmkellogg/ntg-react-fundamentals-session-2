import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Navbar from './Navbar'
import Home from './Home'
import ToDoList from './ToDoList'
import UseRefExample from './useRefExample'
import UseMemoExample from './useMemoExample'
import Jeopardy from './Jeopardy'
import Login from './Login'
import RequireAuth from './RequireAuth'
import CounterWithReducer from './CounterWithReducer'

import { AuthProvider } from './contexts/authContext'

function App() {
  

  return (
      <AuthProvider>
        <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/use-ref-example' element={<UseRefExample />} />
          <Route path='/use-memo-example' element={<UseMemoExample />} />
          <Route path='/counter-with-reducer' element={<CounterWithReducer />}/>

          <Route element={<RequireAuth />}>
            <Route path='/todo-list' element={<ToDoList />} />
            <Route path='/jeopardy' element={<Jeopardy />} />
          </Route>
        </Routes>
      </Router>
      </AuthProvider>
  );
}

export default App;
