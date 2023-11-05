// ==========#for...of Loop#============
// for...of works only Set objects.
// Note:A Set object will eliminate duplicates.
// for (variable of object) {
    // statement
// }
// var array1 = ['a', 'b', 'c'];
// for (let i of array1) {
//     console.log(i);
// }
// let num = {a:'help',
//             b:'team',
//             c:'check',
//             d:"hell",
//           };
// let newobj = new Set(num)
// for (let i of newobj) {
//     console.log(i);
// }




// map Array
// map(callbackfn: Function, thisArg?: any)
// const arr = ['mohit','logan','raju','ram'];
// const arr2 = arr.map(()=>{
//     debugger;
//     console.log(arr);
//     arr.pop();
// });
// console.log(arr);



// for...of loops do not work directly on plain Objects; but, it is possible to iterate over an object’s properties by
// switching to a for...in loop, or using Object.keys():
// const someObject = { name: 'Mike' };
// // const a = Object.keys(someObject);
// // console.log(a)
// for(let i of Object.keys(someObject)){
//     console.log(`${i} : ${someObject[i]}`);
//     console.log(typeof `${i} : ${someObject[i]}`);
// }








// ==========#for...in Loop#============
// for (variable in object) {
    // statement
// }
// var obj = {"a":"foo", "b":"bar", "c":"baz"};
// for (let i in obj) {
//     console.log(i+" "+obj[i]);
//     console.log(typeof (i+" "+obj[i]));
// }
//also work on array
// var array1 = ['a', 'b', 'c'];
// for (let i in array1) {
//     console.log(array1[i]);
//     console.log(typeof array1[i]);
// }






// ==========#Currying#============
// const val = (a) =>{
//     console.log(a)
//     return (b) =>{
//         console.log(b)
//         return (c) =>{
//             console.log(c)
//             return a*b*c;
//         }
//     }
// }
// console.log(val(3)(5)(6));















// Named functions differ from the anonymous functions in multiple scenarios:
//     When you are debugging, the name of the function will appear in the error/stack trace
//     Named functions are hoisted while anonymous functions are not
//     Named functions and anonymous functions behave differently when handling recursion
//     Depending on ECMAScript version, named and anonymous functions may treat the function name property differently
// When using an anonymous function, the function can only be called after the line of declaration, whereas a named
// function can be called before declaration. Consider
// foo();
// var foo = function () { // using an anonymous function
//  console.log('bar');
// }

// Uncaught TypeError: foo is not a function


// foo();
// function foo () { // using a named function
//  console.log('bar');















// ==========#Recursive Function#============
// A recursive function is simply a function, that would call itself.
// let recu = (n) =>{
//     if(n<=1){
//         return 1;
//     }
//     return n*recu(n-1);
// }
// console.log(recu(6));














// ==========#variadic functions#============
// Functions with an Unknown Number of Arguments is calles variadic functions

// Version ≤ 5
// function fun(){
//     for(let i =0;i<arguments.length;i++)
//     {
//         console.log(arguments[i]);
//     }
// }
// fun("help","check");


// Version 6 (...)it is spread operator
function fun(...arg){
        console.log(arg);
}
fun("help","check");
