# Exercise: Working with Classes

## Instructions

### Part 1: Create a Class

- In a new file, create a `Person` class. Include the following properties:
    - firstName
    - lastName

### Part 2: Extend a Class

- Create an `Employee` class that extends `Person`. Include the following properties:
    - id
    - jobTitle
    - paRate (per hour)

- Define a constructor that passes `firstName` and `lastName` to the parent consructor, and assigns the remaining values to properties. 

- Add a method called `promote()` that has two parameters: `newJobTitle` and `newPayRate`.

- Add another method called `toString()` that returns a string formatted as: 
   - "`[name] (ID: [id] is a [jobTitle] earning $[payRate]/hr`"

- Add a method called `getGrossPay()` that has a parameter called `hrsWorked`. Within the method, calcualte weekyly gross pay by muliplying `hrsWorked` by the employee's `payRate`.

### Part 3: Instantiating Objects

- Instantiate two different `Employee` objects and display their properties by calling their `toString` method and displaying the results.

- Call `getGrossPay()` for each employee an display the employee's name, their hours worked, and the gross pay value returned. For example:
    - `"Jack has earned $1600 for working 40 hours."`
    
- Call `promote()` on one of the employees to update their job title and pay rate. Then, call `getGrossPay()` on that employee again.