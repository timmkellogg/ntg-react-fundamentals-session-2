# React Router

> NOTE: React Router v6.4: React Router version 6 introduced new ways to configure routes, such as `createBrowserRouter()`. Because these changes are still new, we will be using an approach that is supported by both React Router versions 5 and 6. 

## BrowserRouter, Routes, Route, and Link Components

``` js
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {

    return (
        <Router>
            <ul>  
              <li>  
                <Link to="/">Home</Link>  
              </li>  
              <li>  
                <Link to="/about">About Us</Link>  
              </li>  
              <li>  
                <Link to="/contact">Contact Us</Link>  
              </li>  
            </ul> 
            <Routes>
                <Route exact path='/' element={< Home />}></Route>  
                <Route exact path='/about' element={< About />}></Route>  
                <Route exact path='/contact' element={< Contact />}></Route>  
            </Routes>
        </Router>
    )
}
```

## Resources

* [https://reactrouter.com/en/v6.3.0/api#browserrouter](https://reactrouter.com/en/v6.3.0/api#browserrouter)
* [https://reactrouter.com/en/v6.3.0/api#routes-and-route](https://reactrouter.com/en/v6.3.0/api#routes-and-route)
* [https://reactrouter.com/en/v6.3.0/api#link](https://reactrouter.com/en/v6.3.0/api#link)