/*
  multiple lines comment
*/
// single line comment

/**
 * @param {number} age - will calculate the age
 * @param {number} age - will return the age
 */

/* ----------------------- output screens --------------------------- */
// alert('hello js from basics.js');
console.log('hello js from basics.js');
// console.error('this is an error message');
// console.warn('this is an warning message');
// console.table(['ahmed', 'ali', 'hassan']);
// console.log(window)
// window.alert('hello js from basics.js');
// window.confirm('did you have 18 years old ?');
// window.prompt('what is your age ?');

/* ----------------------- Datatypes --------------------------- */
/*
  privimitive data types: not an object like [boolean, number, string, null, undefined, symbol] primitives are immutable
  reference data types: are objects [array - object - function] reference data types are mutable

  check this article : https://www.freecodecamp.org/news/primitive-vs-reference-data-types-in-javascript/
*/
/*
console.log(typeof 'Ahmed'); // string
console.log(typeof 18); // number
console.log(typeof 18928288288282.5); // number
console.log(typeof true); // boolean
console.log(typeof null); // object (this is a bug in js)
console.log(typeof undefined); // undefined
let x = Symbol('unique');
console.log(typeof x); // symbol
console.log(typeof ['ahmed', 'ali']); // object (array is a special type of object)
console.log(typeof {'name': 'Ali'}); // object (array is a special type of object)
*/

/* ----------------------- identifier Naming Conventions --------------------------- */

// valid names:
// var name = 'Ahmed';
// var Name = 'Ali';
// var _person_name = 'Hassan';
// var $person_name$ = 'Omar';
// var UserName = 'John';
// var userName = 'John';
// var USERNAME = 'John';
// var USER_NAME= 'John';
// var user_name_test = 'John';
// console.log(USER_NAME);

// in-valid names:
// var user-name-test = 'John';
// var 1user = 'John'; // cannot start with a number
// var #user = 'John'; // cannot start with a special character
// var user name = 'John'; // cannot have space in the name
// var user%name = 'John'; // cannot have special characters like @, %, etc.
// var const = 'John'; // cannot use reserved keywords like const, let, var, function, etc.

// we can use :
// var userName = 'John'; // camelCase
// var USER_NAME = 'John'; // UPPER_CASE always use for constants variables
// var user_name = 'John'; // snake_case
// var UserName = 'John'; // PascalCase

/* ----------------------- var & let & const --------------------------- */
/*
var: 
- can be re-declared and re-assigned
- can be accessed before declaration (hoisting)
- can be used in the window object (global scope)
- can be accessed in the block scope (like inside a function or a loop) or global scope

let: 
 - cannot be re-declared in the same scope, but can be re-assigned
 - cannot be accessed before declaration (no hoisting)
 - can't be used in the window object (global scope)
 - can be accessed in the block scope (like inside a function or a loop) or global scope

const:
 - cannot be re-declared and cannot be re-assigned, must be initialized at the time of declaration
 - cannot be accessed before declaration (no hoisting)
 - can't be used in the window object (global scope)
 can be accessed in the block scope (like inside a function or a loop) or global scope
 */

// var userName = 'John';
// var userName = "Ali"; // can be re-assigned
// console.log(userName); // John

// let  userName = 'John';
// let userName = "Ali"; // can be re-assigned
// console.log(userName); // John

// const  userName = 'John';
// const userName = "Ali"; // can be re-assigned
// console.log(userName); // John

// console.log(userName);
// var userName = 'John';

// console.log(userName);
// const userName = 'John';

// let userName = 'John';
// console.log(window)
/*
const userName = "John"; // global scope
function displayUserName() {
//   var userName = "Ali"; // local scope
  console.log("in function", userName);
}
console.log("out function", userName);
displayUserName();
*/

/* ----------------------- strings --------------------------- */
// console.log("Hello strings");
// console.log(""Hello strings""); // invalid syntax
// console.log('"Hello strings"');
// console.log("'Hello strings'");
// console.log("Hello 'strings'");

// console.log("Hello 
    
//     'strings'");

// console.log("Hello \n 'strings'");

// let userName = "Ahmed";
// let age = 18;
// console.log("Hello I'm  " + userName + ", My age is " + age); // Hello Ahmed, your age is 18

/* ----------------------- Template literals ES6 --------------------------- */
// let userInfo = `"hello" 'string' `;
// let userName = "Ahmed";
// let age = 18;
// let userInfo = `Hello I'm ${userName}, My age is ${age}`; // using backticks
// console.log(userInfo);


// let markup = `
//     <div class="user-info">
//         <h1>Hello I'm ${userName}, My age is ${age}</h1>
//     </div>
// `;

// document.write(markup);