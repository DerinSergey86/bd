function testFunction() {
  // return "Hello!";
  return new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve("Hello!");
       // reject("Some error!");
     }, 5000);
  });
}

console.log("App Started!");

// function testAsyncFunction() {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve ("foo");
//     }, 300);
// });
// }


    try {
        const testValue = await testValue();
        console.log("res = ", testValue);
    } catch (err) {
        console.log("err = ", err);
        
    }
    console.log("Finally detected");
    