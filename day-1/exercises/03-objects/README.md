# Exercise: Working with Objects - Design Your Dream Car

## Instructions 

# Part 1: Creating Objects

- Define an object called `dreamCar` and assign in the following properties:
    - make: string
    - model: string
    - yearBuilt: number
    - color: string
    - isElectric: boolean
    - odometer: number
    - features: array

- Define a method called `drive()` that takes in a number and adds that number to the `odometer` property.

Since this is our *dream* car, let's add some features we'd only have in our dreams, to ensure we're always driving the latest and greatest! 

- Define a method called `refreshBuild()` that allows us to increment the `yearBuilt` value up by one.

- Define a method called `repaint()` that takes in a color as an arguement and updates the `color` property.

- Define a method called `resetMiles()` that sets the `odometer` propety back to 0.

- Test out each methods by calling `dreamCar.[method]` and logging the value of `dreamCar` to the console.

# Part 2: Object Constructors

- Convert the `dreamCar` object into an object constructor called `DreamCar`. 

- Add the methods from Part 1 into the object's prototype. 

- Instantiate two new objects using the object constructor you created and test their methods.