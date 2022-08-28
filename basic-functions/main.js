// Function Expression
const getRectangleArea = function (width, height) {
  return width * height
}
console.log(getRectangleArea(2, 3)) //6

//Named Function Expression
let fact = function factorial(n) {
  if (n <= 1) {
    return 1
  }
  return n * factorial(n - 1)
}
console.log(fact(5)) //120

// function with object type parameter
function myFunc(theObject) {
  theObject.model = 'A9999'
}
const product = { model: 'A1001', price: 199 }
console.log(product.model) // "A1001"
myFunc(product)
console.log(product.model) // "A9999"

// function with primitive type parameter
function square(side) {
  return side * side
}
let theSide = 2
console.log(square(theSide)) //4
console.log(theSide) //2
