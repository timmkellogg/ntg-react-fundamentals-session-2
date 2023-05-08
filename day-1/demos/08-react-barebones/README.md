# Demo: React Barebones

## Including React via CDN

``` html

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script> 

```

To verify you were successful, we should now be able to log the library objects to the console in your script:

``` js

// should return an object rather than an error
console.log(React) 
console.log(ReactDOM) 

```

## Using React and ReactDOM

``` js
//Select DOM element to render on
const domContainer = document.querySelector('#app')

// Create root on selected DOM element
const root = ReactDOM.createRoot(domContainer)

// Create component
const Component = React.createElement('div', {}, 'Hello World!')

// Render component at root
root.render(Component)
```

## Resources

* [https://reactjs.org/docs/add-react-to-a-website.html](https://reactjs.org/docs/add-react-to-a-website.html)