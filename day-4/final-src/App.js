import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'

import { UserProvider } from './contexts/userContext'

import { Provider } from 'react-redux'
import store from './reducers/counterReducer'

import NavBar from './NavBar'
import Login from './Login'
import ToDoList from './ToDoList'
import Counter from './Counter'
import ControlledForm from './ControlledForm'
import Jeopardy from './Jeopardy'
import MemoCounter from './MemoCounter'
import UseRefCounter from './useRefCounter'
import RequireAuth from './RequireAuth'
import ReduxCounter from './ReduxCounter'

// function DynamicComponent(props) {
//   const params = useParams()
//   console.log(params)
//   const [user, setUser] = React.useState(null)

//   React.useEffect(() => {
//     fetch(`some-server.com/users/${params.id}/${params.username}`)
//     .then((user) => {
//       setUser(user)
//     })
//   })


//   return (
//     <div>
//       <Jeopardy user={user} />
//     </div>
//   )
// }

function App() {


  return (
    <Router>
      <Provider store={store}>
        <UserProvider>
          <NavBar />

          <Routes>
            <Route path='/' element={<div>This is my default location</div>} />

            {/* <Route path='/dynamic-route/users/:id/:username' element={<DynamicComponent />} /> */}

            <Route path='/counter' element={<Counter />} />
            <Route path='/memo-counter' element={<MemoCounter />} />
            <Route path='/ref-counter' element={<UseRefCounter />} />
            <Route path='/controlled-form' element={<ControlledForm />} />
            <Route path='/login' element={<Login />} />
            <Route path='/redux-counter' element={<ReduxCounter />} />

            <Route element={<RequireAuth />}>
              <Route path='/jeopardy' element={<Jeopardy />} />
              <Route path='/todo-list' element={<ToDoList />} />
            </Route>

            <Route path='/*' element={<div>404: Page Not Found</div>} />
          </Routes>
        </UserProvider>
      </Provider>
    </Router>
  );
}

export default App;
