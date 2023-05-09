# React Component Styling

## Inline `style` Attribute

Styles can be passed to an element inline using that element's `style` attribute as an object. CSS properties are passed as camel-cased properties in that style object. 

```js
...
render() {
    return (
        <div style={{ textAlign: 'center', border: 'solid thin', padding: '10px'  }}>
            <h1 style={{ backgroundColor: 'black', color: 'white' }}>Hello World</h1>
        </div>
    )
}
...
```

## Including a CSS Stylesheet

Sample CSS:
```css
.main-content {
    text-align: 'center';
    border: 'solid thin black';
    padding: 10px;
}

.hello-heading {
    background-color: black;
    color: white;
}
```


At the top of your React component file:

```js
import '../path/to/styles/style.css'

...

render() {
    return (
        <div className='main-content'>
            <h1 className='hello-heading'>Hello World</h1>
        </div>
    )
}
...
```
> Note: Styles specified in imported CSS file are *applied globally*. Use unique class names to avoid conflicting with other component styles.

## React Bootstrap

React Bootstrap is a component library of pre-styled React components utilizing styles from the Bootstrap CSS framework. 

```js
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
```

## Resources

* [https://reactjs.org/docs/faq-styling.html](https://reactjs.org/docs/faq-styling.html)
* [https://react-bootstrap.github.io/getting-started/introduction](https://react-bootstrap.github.io/getting-started/introduction)