import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar'
import ComponentA from './components/ComponentA'

function App() {
  const [user] = useState({
    username: 'timk',
    firstName: 'tim',
    lastName: 'kellogg'
  })

  return (
    <div>
      <Navbar user={user} />
      <ComponentA user={user} />
    </div>
  )
}

export default App
