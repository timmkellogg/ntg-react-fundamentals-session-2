# Working with the DOM

A core part of building web applications is manipulating the web page based on user interaction. JavaScript can accomplish this using the Document Object Model (DOM) via methods made available on the global `document` object.

## Adding Elements

``` html

<div id="app"></div>

```

``` js

// Use querySelector to access DOM elements
const rootElement = document.querySelector('#app') // access element where id attribute = 'app'

// Initialize new element in memory
const newH1 = document.createElement('h1')

// Add text to new element in memory
newH1.textContent = 'Hello DOM!'

// Append newH1 to rootElement
rootElement.append(newH1)

```

## Clearing an Element's Contents

A common practice when working with DOM elements is the need to clear the content within an element.

``` html

<ul id='task-list'>
    <li>Task 1</li>
    <li>Task 2</li>
    <li>Task 3</li>
    <li>Task 4</li>
    <li>Task 5</li>
</ul>

```

``` js

const taskList = document.querySelector('#task-list')

taskList.innerHTML = ''

```

## Getting & Setting Attributes

``` html

<div id="someDiv" arbitraryAttribute="arbitraryValue"></div>

```

``` js

// Use query selector to find element where id = 'someDiv'
const divElement = document.querySelector('#someDiv')

// Find value stored in arbitraryAttribute
divElement.getAttribute('arbitraryAttribute') // returns 'arbitraryValue'

// getAttribute returns null if attribute does not exist on element
divElement.getAttribute('someOtherAttribute') // returns null

// setAttribute is used to add a new attribute
divElement.setAttribute('someOtherAttribute', 'someOtherValue')

// getAttribute can now return the value stored in someOtherAttribute
divElement.getAttribute('someOtherAttribute') // returns 'someOtherValue

```