# Working with Component Modules

The ability to export and import JavaScript objects is a part of what makes React component architecture so powerful. Being able to isolate reusable pieces of our code into their own files allows us to split our components up and organize them however we would prefer. 

## Creating and Exporting Modules

``` js
const myModule = {
    foo: 'bar',
    otherProp: 'someVal'

}

export default myModule
```

## Importing Modules

``` js
import myModule from './path-to-module/myModule.js'

console.log(myModule.foo) // returns 'bar'
```

You can destructure the object being imported to just receive the parts you need.

``` js 
import { otherProp } from './path-to-module/myModule.js'


console.log(otherProp)
```

## Importing and Exporting Components

``` js
function SomeComponent() {
    return (
        <div>
            Some Component
        </div>
    )
}

export default SomeComponent;
```
 
In `src/App.js`:

```js
import SomeComponent from './SomeComponent.js'

function App() {
    return (
        <div>
            <SomeComponent />
        </div>
    )
}
```

## Resources

* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)