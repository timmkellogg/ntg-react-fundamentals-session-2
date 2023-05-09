# Props

Components accept arbitrary inputs (called “props”) and can use the props to help shape the output delivered to the UI. Props are passed in as JSX attributes to the component and treated as a single object inside the component.

``` js 
//functional component using props.*
function OnePotato(props) {
    return <h1>{props.name} loves {props.type} potatos!</h1>;
}

//class component using this.props.*
class TwoPotato extends React.Component {
    render() {
        return <h1>{this.props.name} loves {this.props.type} potatos!</h1>;
    }
}

//the attributes passed in when rendering the components become part of the props object inside the component
ReactDOM.render(
    <div>
        <OnePotato name="Tim" type="Yukon Gold"/>
        <TwoPotato name="Eric" type="French Fried"/>
    </div>,
    document.getElementById('root')
);
```

You can also pass  `objects`,  `functions`, and other types of data other than strings as the value for your props. You may pass something from the components state into a child component as a prop or even a callback function to facilitate child-to-parent communication. The  [Passing Data Between React Components ](https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17)  article on medium does a good job of explaining this topic.

Take some time to  _**Learn On Your Own!**_  out the  [Spread Operator ... ](https://reactjs.org/docs/jsx-in-depth.html#spread-attributes)  to learn more about how you can pass props into a component.

> NOTE: A Component must never modify its own props. React is pretty flexible but it has a single strict rule:  **All React components must act like pure functions with respect to their props.**

## Resources

* [https://reactjs.org/docs/components-and-props.html](https://reactjs.org/docs/components-and-props.html)