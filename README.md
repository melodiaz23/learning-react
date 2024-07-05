# React

JS **library** for building user interfaces.

> [!Hint]
> With react we write **declarative code**. We define the **target UI state(s)**, **not the steps** to get there.

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


By default the code we write in react projects would not run in the browser, *React projects require a build process that transform our code.* So, NodeJS is not just used to install packages with the NPM command or to create projects with the NPX command, but it's also used behind the scenes by that build process.

## package.json
| Lists all the dependencies of the project.

With `npm install` we download and install any third party packages needed by the project (when the project has started already).

## Building UI with **Components**

Components are potentially reusable blocks which we can create and which we them combine to build the overall UI.

React Apps are build by **Combining Components**.


> [!NOTE] 
> Any website or app can be broken down into smaller building blocks: Components.

- The idea behind that components are that they wrap HTML, CSS and JS logic that might be needed which together define and control a part of the UI.  

![why-components](https://github.com/melodiaz23/react/blob/master/public/why-components.png?raw=true)

*React components are just JS functions.*


> [!NOTE] 
> JSX allows us to define the target UI / HTML code right inside our JavaScript code - and therefore right inside our components.


In a [Project](https://github.com/melodiaz23/react/tree/master/01-starting-project):

- `App.jsx` 
	- Contain the markup for the content. 
	- This extension JS Syntax eXtension, is because it is a JS file that uses non-standard JS syntax.
	- Browser do not support `.jsx`.
	- Is a **React component**.
	- Must follow two rules: 
		- Name starts with Uppercase Character and multi-word names should be written in PascalCase.
		- Returns "renderable" content (must return a value that can be **rendered** or "displayed on screen" by react).
	- As developer we almost use JSX code exclusively inside of components functions.
	- May contain as many nested components as needed (Component tree)
- `index.jsx`
	- `createRoot` and `render` methods are responsible for rendering a single root component (App component)

  
> React combines all the JSX code from all those components to generate the overall DOM (the elements that are showing up on the screen).


## Using, Sharing, & Outputting **Data**

For output data to be displayed we need to wrap it with curly braces.

```jsx
<p>{data}</p>
```
> If statements, for-loops, function definitions and other block statements are not allowed here. Only expressions that directly produce a value.


### Images files

As part of the deployment process the code will be transform, and optimized, so we should use and import statement.

```jsx
import reactImg from './assets/react-core-concepts.png';

// ...

<img src={reactImg} alt="Stylized atom" />

```
> At the end `reactImg` is a JS object.

### 'props'

Being able to pass data into components.

```jsx
<CoreConcept title="Components" image={componentsImg} />
```
> tittle and image we call it 'prop'.

+ We can pass all kind of data: String, number, objects, arrays (any valid JS expression).
+ We can set dynamic values with the sane syntax we use in JSX, curly braces `{}`
+ The function/component only will receive one parameter, typically call `props`.
+ The value that will be pass as a parameter will be an object that has all the key-value pairs or custom attributes pass to the component.

```jsx
function CoreConcept(props) {
return (
<li>
{/* The same name of the custom attributes has to be the same name of the key, in this case 'props.image' */}
<img src={props.image} alt="..." />
{/* ... */}
)}
```

Alternative to `props.image`, we can use object destructuring as alternative:

```jsx
function CoreConcept({ image }) { // Use the same property names was defined as props
  return (
    <li>
      <img src={image} alt="..." />
      {/* ... */}
    </li>
  )
}
```


- we can use the **spread operator** to pill out all the key-value pairs of the object, if:

```js
export const CORE_CONCEPTS = [
{
image: componentsImg,
title: 'Components',
description:
'The core UI building block - compose the user interface by combining multiple components.',
},
// ...
];
```

```jsx
<CoreConcept {...CORE_CONCEPTS[0]} />
```

- if a component is used like this:

```jsx
<CoreConcept
  title={CORE_CONCEPTS[0].title}
  description={CORE_CONCEPTS[0].description}  
  image={CORE_CONCEPTS[0].image} />
```


We could group the received props into a single object like this:

```jsx
export default function CoreConcept({ ...concept }) { 
  // ...concept groups multiple values into a single object
  // Use concept.title, concept.description etc.
  // Or we can destructure the concept object: const { title, description, image } = concept;
}
```

- Also, we can set a default value, in case some prop is not passed: 

```jsx
export default function Button({ caption, type = "submit" }) { 
  // caption has no default value, type has a default value of "submit"
}
```
> This can easily be achieved since JavaScript supports default values when using object destructuring


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
