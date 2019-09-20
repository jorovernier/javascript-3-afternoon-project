/*
  Once you complete a problem, refresh ./destructuring.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}
// Do not edit the code above.

/*
  Use object destructuring to save the property values from the object carDetails into new variables. 
*/

let {color,make,model,year} = carDetails



////////// PROBLEM 2 //////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/

function greeting( obj ) {
  let {firstName,lastName,title} = obj
  
  // Do not edit the code below.
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
  // Do not edit the code above.
}



////////// PROBLEM 3 //////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/

function totalPopulation(states) {
  let {utah,california,texas,arizona} = states
  return utah + california + texas + arizona
}

totalPopulation(states = {
  utah: 4,
  california: 4,
  texas: 4,
  arizona: 4
})

////////// PROBLEM 4 //////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/

function ingredients(food){
  let {carb,fat,protein} = food
  return [carb,fat,protein]
}

ingredients(food = {
  carb: 'ohydrates',
  fat: 'lipose',
  protein: 'amino acid'
})


////////// PROBLEM 5 //////////

/*
  Now we will use object destructuring as the function's parameter instead of destructuring the object inside of the function declaration.
  Example:
    function example( {one, two, three} ) {
      return one + two + three
    }

  Write a function called largeNumbers that will take a destructured object as it's parameter.
  The object properties will be named first, second, and third and their values will be numbers.
  Find the smallest number of the three and return that number.
*/

function largeNumbers(numbers){
  let {first,second,third} = numbers
  if (first < second && third) {
    return first
  } else if (second < first && third) {
    return second
  } else if (third < first && second) {
    return third
  }
}

largeNumbers(numbers = {
  first:1,
  second:2,
  third:3
})


////////// PROBLEM 6 //////////

/*
  Write a function called numberGroups that will take a destructured object as it's parameter.
  The object properties will be named a, b, and c and their values will be arrays of numbers.
  Find the longest array and return that array.
*/

function numberGroups(arrays) {
  let {a,b,c} = arrays
        if (a.length > b.length && a.length > c.length) {
    return arrays.a
  } else if (b.length > a.length && b.length > c.length) {
    return arrays.b
  } else if (c.length > a.length && c.length > b.length) {
    return arrays.c
  }
}

numberGroups(arrays = {
  a: [1,2,3,4],
  b: [1,2],
  c: [1,2,3]
})
