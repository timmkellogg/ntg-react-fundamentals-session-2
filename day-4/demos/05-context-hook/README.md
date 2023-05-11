# useContext Hook

The `useContext()` hook makes it possible to share a value with nested components without passing them directly down the component tree. 

## `useContext()` Example

`src/contexts/UserContext.js`
``` js
import { createContext } from 'react'

const UserContext = createContext(null)

export default UserContext
```

`src/App.js`
``` js
import UserContext from './userContext'

import NestedComponent from './NestedComponent'

function App() {
  return (
    <UserContext.Provider value={{ username: 'timk', firstName: 'tim', lastName: 'kellogg'}}>
      <NestedComponent />
    </UserContext.Provider>
  )
}

export default App
```

`src/NestedComponent.js`
``` js
import { useContext } from 'react'
import UserContext from './userContext'

function NestedComponent() {
    const user = useContext(UserContext)
    return (
        <div>
            {JSON.stringify(user)} {/* {"username":"timk","firstName":"tim","lastName":"kellogg"} */}
        </div>
    )
}

export default NestedComponent
```

## Resources

* [https://reactjs.org/docs/hooks-reference.html#usecontext](https://reactjs.org/docs/hooks-reference.html#usecontext)
* [https://www.w3schools.com/react/react_usecontext.asp](https://www.w3schools.com/react/react_usecontext.asp)