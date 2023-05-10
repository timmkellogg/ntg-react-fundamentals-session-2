## Arrays, Map, Lists, and Keys

## Array Map

```js
const numArr = [4, 8, 15, 16, 23, 42]

const mappedArr = numArr.map((num) => {
    return num + 1 
})

console.log(mappedArr) // returns [5, 9, 16, 17, 24, 43]
```

## Lists & Keys

```js
...

state = {
    tasks: ['learn react', 'render components']
}

render() {
    return (
        <div>
            <ul>
                {this.state.tasks.map((task, index) => {
                    return (
                        <li key={index}>{task}</li>
                    )
                })}
            </ul>
        </div>
    )
}

...
```

## Resources

* [https://reactjs.org/docs/lists-and-keys.html](https://reactjs.org/docs/lists-and-keys.html)
* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)