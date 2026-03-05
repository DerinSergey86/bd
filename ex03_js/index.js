// import Square, { size1, size2, print } from "./lib.js"

const {Square, size1, size2, print} = require("./lib")


const mySquare = new Square(size1);
print('The area of mySquare is', mySquare.area())

const mySquare02 = new Square(size2);
print('The area of mySquare2 is', mySquare02.area())