# Handling Events

Events in JavaScript drive user interaction in a web application. 

## Click Events (onclick)

``` html

...

<div>
    <button onclick="handleButtonClick()">Click me!</button>
</div>

... 

<script>

function handleButtonClick() {
    alert('button clicked!')
}

</script>

```

## Form Events (onsubmit)

``` html

...

<form onsubmit="handleFormSubmitted(event)">
    <input id="form-input" />
    <button>submit</button>
</form>

... 

<script>

function handleFormSubmitted(event) {
    event.preventDefault()

    const input = document.querySelector('#form-input')

    alert(`form submitted! Input value: ${input.value}`)
}

</script>

```

## Key Events (onkeyup, onkeydown)

``` html

...

<div>
    <input onkeyup="handleKeyPressed(event)" />
</div>

... 

<script>

function handleKeyPressed(event) {
    alert(`Key pressed: ${event.key}`)
}

</script>

```

## Input Events (onchange)

``` html

...

<div>
    <input oninput="handleInput(event)" />
</div>

... 

<script>

function handleInput(event) {
    console.log(event.target.value)
}

</script>

```

## Resources

* [https://developer.mozilla.org/en-US/docs/Web/Events](https://developer.mozilla.org/en-US/docs/Web/Events)