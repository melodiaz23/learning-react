JS **library** for building user interfaces.

> [!Hint]
> With react we write declarative code. We define the target UI state(s), not the steps to get there.

# Declarative Vs. Imperative Code

## Declarative
| Define the goal, not the steps

```jsx
let content; 

if(user.isLoggedIn){
	content = <button>Continue</button>
} else {
	content = <button>Log In</button>
}
return content
```

## Imperative
| Define the steps, not the goal


```js
let btn = document.querySelector('button');

if (user.isLoggedIn){
	button.textContent = 'Continue';
} else {
	button.textContent = 'Log In';
}

document.body.append(btn);

```



# JS Refresher

- JS files are imported in script tag.

```html
<script src="assets/scripts/main.js" type="module"></script>
```

We can add extra attributes as defer or `type=module`in modern browsers.
- `defer` for make sure the script that will be imported only is executed after the rest of the HTML. 
- `type=module` is used in modern JS projects. This attribute makes sure that the JS file is treated as a JS module, this means we can import script A into script B.

```js
// util.js
export let apiKey = "adnasdoasflak1"; // Option 1: Named exports
export default "adnasdoasflak1" // Option 2: Default
// Whitout a name. Default thing that's exported by the file.
// Also posible export a function or variable that is created before.
// Only one default export per file

export let apiKey = "adnasdoasflak1"; // Option 3
export let abc = "abc"; // Option 3

```
>Is possible to merge 1 default and named exports.

```js 
// app.js
import { apiKey } from "./util.js"; // Option 1
import apiKey from "util.js" // Option 2
import { apiKey, abc as content } from "./utils.js" // Option 3
// Alias is asign to abc
// Option 3 also can be importing as a grouping into a JS object.
import * as util from "./util.js"; // Then we can get acces to util.apiKey or util.abc

```

## Types of values

- **String:** Text values
- **Number:** Positive or negative. With decimal point (float) or without it (integer)
- **Boolean:** True or false
- **Null & undefined:**
	- `undifined`: where no value is assigned yet.
	- `null`: Assigned by developer (reset value).
- **Objects:**

*Values should be stores, for that we use **variables** (for that we use `let` or `const`).*

Variables are data containers where we store a value in a variable which carries any name of our choice. We assign a name to a variable and we can then use this variable name as an identifier.


> [!Hint] Identifiers rules and recommendations
> 1. Must not contain whitespace or special characters (except $ and `_`).
> 2. May contain numbers but must not start with a number.
> 3. Must not clash with reserved keywords.
> 4. Should use camelCasing.
> 5. Should describe what the "thing" it identifies contains or does.

### Operators

We can perform math: 
- Plus `+`
- Minus `-`
- Division `/`

> Plus is also use for concatenate strings.

Also we have: 
- Triple equal `===` for checking for equality
- Comparison operators `>`, `<`, `>=`, `<=`

## Functions

Functions could be created with `function` keyword or with the arrow function syntax `() => {}`.

```js
function createGreeting(userName, message = "Hello!") { // Hello is a default value in case message is not provide.
	console.log(userName);
	console.log(message);
	return "Hi, I am " + userName + ". " + message;
}

const greeting1 = createGreeting('Melissa'); // Calling the function
console.log(greeting1);
```


> [!Hint] Return Statement
> Functions must only have one return statement at most. Functions without "return" implicitly return "undefined".

### Arrow Functions
| Useful when dealing with anonymous function.

```js
export default (userName, message) => {
console.log("Hello");
return userName + message;
};
```


> [!Important] Syntax shortcuts
> - If the arrow functions takes **exactly one parameter**, we may **omit** the wrapping parentheses. Instead of `(userName) => { ... }`, we use `userName => { ... }`.
> - If the arrow function contains **no other logic but a** `**return**` **statement**, we may **omit the curly braces** and the `return` keyword, like this `1. number => number * 3;`
> - If we're trying to return a **JavaScript object**, the code would need to be adjusted like this: `number => ({ age: number });`. By wrapping the object and its curly braces with an **extra pair of parentheses**, JavaScript understands that the curly braces are not there to define a function body but instead to create an object.

## Objects
| Can be used to group multiple values together. 

```js
const user = {
name: "Meli", // Key: Value
age: 34,

greet() { // Can also store functions, which are calls methods.
console.log("Hello!");
console.log(this.age); // 'this' is used when we are in a method (in a function to belongs to an object), that way we can have acces to the properties of this object.
}

};

console.log(user.name);
user.greet(); // to get access to greet method.
```

For creating objects, we can created like before or with the special `class` keyword. With the class keyword,
we can create a **blueprint** that can then later be used to create the actual objects.

```js
class User { // For class names we start with a capital case character
	constructor(name, age) {
	// Name and age will be store as properties for the object.
	this.name = name; 
	this.age = age;
	}
	greet() {
	console.log("Hi!");
	}
}

const user1 = new User("Meli", 33);
console.log(user1);
user1.greet();
```

You can also use **inheritance** when using classes:  

```js
class Human {
	species = 'human';
}

class Person extends Human {
    name = 'Max';
    printMyName = () => {
        console.log(this.name);
    }
 }

 const person = new Person();
 person.printMyName();
 console.log(person.species); // prints 'human'
```

## Arrays and Arrays Methods
| Arrays are an special kinds of objects.

```js
const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]); // Sports
 
hobbies.push("Working");
console.log(hobbies); // ["Sports", "Cooking", "Reading", "Working" ];

// Find index will return true if we have the item we are looking for or false, otherwise.
const index = hobbies.findIndex((item) => item === "Sports");
console.log(index); // 0

//// The map method transforms every item in an array into a new item, based on the transformation defined by the function passed as an argument.
const editedHobbies = hobbies.map((item) => ({ text: item }));
console.log(editedHobbies); // Return a new array
```


## Destructuring arrays and objects

### Arrays
```js

// Right side create a new array, left side destructure that array.
const [firstName, lastName] = ["Meli", "Diaz"];
// Same to say:
// const userNameData = ["Meli", "Diaz"];
// const firstName = userNameData[0];
// const lastName = userNameData[1];

console.log(firstName); // "Meli"
console.log(lastName); // "Diaz"
```

### Objects

```js

// Insted of this: 
// const name = user.name;
// const age = user.age;
const { name: userName, age } = { // We need to use the field names are defined in the object, but we can define and alias
name: "Meli",
age: 33
};

console.log(userName); // "Meli"
console.log(age); // 33


```

### Function Parameter List

Instead of: 

```js
function storeOrder(order) {
	localStorage.setItem('id', order.id);
	localStorage.setItem('currency', order.currency);
}
```

We can use destructuring like this: 

```js
function storeOrder({id, currency}) { // destructuring
	localStorage.setItem('id', id);
	localStorage.setItem('currency', currency);
}
```
>`id` and `currency` are _"pulled out"_ of the incoming object.

## The Spread & Rest Operator
| **Spread** Pulls out values from and array and adds them as separate values to a new array.

```js
const hobbies = ["Sports", "Cooking"];
const newHobbies = ["Reading"];
const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);
```
> The three dots will pull out all the elements of the array and add them as separate values to the new list.

In objects: 

```js
const user = {
name: "Meli",
age: 33
};
const extendedUser = {
isAdmin: true,
...user // Spread 'user' into extendedUser
};
console.log(extendedUser);
```

**Rest** converts a list of elements into an array (so we use it for arrays only)

```js
function convertToArray(...asManyArgumentsAsYouWant) {
    return asManyArgumentsAsYouWant;
}
```

We can use that function like this:

```js
console.log(convertToArray(1, 2, 3)) // yields [1, 2, 3]
console.log(convertToArray('hi', 'everyone')) // yields ['hi', 'everyone']
```
## Control Structures

### If statement
| Compare values, and then execute the code only if the condition is met

```js
const password = prompt("Your password"); 
if (password === "Hello") {
console.log("Hello works");
} else if (password === "hello") {
console.log("hello works");
} else {
console.log("Access not granted.");
}
```
> `prompt` is a function provide by the browser which will prompt the user for9 input.

## For loop

```js
const hobbies = ["Sports", "Cooking"];

for (const hobby of hobbies) {
console.log(hobby);
}
```

## Manipulating the DOM

With React we not manipulate the DOM directly like this: 
```js
const list = document.querySelector("ul");
list.remove();
```

## Functions as values

```js
  
function handleTimeout() { // Option 1
	console.log("Timed out!");
}

const handleTimeout2 = () => { // Option 2
	console.log("Timed out ... again!");
};

setTimeout(handleTimeout, 2000); // Option 1
setTimeout(handleTimeout2, 3000); // Option 2

setTimeout(() => { // Option 3. Anonymous function, directly
console.log("More timing out...");
}, 4000);
```

## Defining functions inside functions

```js
function init() {
	function greet() {
	console.log(“Hi!“);
}

greet();
}

init();
```
>We are able to define functions inside functions

## Reference and primitive values

### Primitive Values
| We can't edit them 

- Strings
- Numbers
- Booleans

### Reference Values
| In a variable we don't store the value, we store the address of that value in memory.

- Objects
- Arrays

```js

const message = “Hello”; // Primitive
const hobbies = ["Sports", "Cooking"]; // Reference

// hobbies = []; // This won't work because will be a new array and hobbies is a const.

hobbies.push("Working"); // Mutate the original array
console.log(hobbies);
```

# React Essentials

React projects use a build process where the code write is not the code that gets executed. The code is **transform** with the help of tools, which can be seen in the [package.json](#package.json) file.

React projects use a build process cause:
- Raw, unprocessed react code won't executed in the browser.
- The code would not be optimized for production (e.g not minified)


> [!Concept]
> Minification means that for example, names of variables or functions are shortened to reduce the amount of JS code that's serve to the user.


*React projects require a build process that transform our code.* So, NodeJS is not just used to install packages with the NPM command or to create projects with the NPX command, but it's also used behind the scenes by that build process.

## package.json
| Lists all the dependencies of the project.

## Building UI with **Components**

## Using, Sharing, & Outputting **Data**

## Handling User **Events**

## Building interactive UIs with **State**


# Resources
#Resources 

- https://github.com/academind/react-complete-guide-course-resources

## Methods: 

- `map()`  => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- `find()`  => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- `findIndex()`  => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- `filter()`  => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- `reduce()`  => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b)
- `concat()`  => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b)
- `slice()`  => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- `splice()`  => [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
