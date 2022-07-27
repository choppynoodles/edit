# React vs other frameworks and libs
- The world of SPA's
- The use of Virtual DOM
- React is a library
# React and React DOM
- React is the library for creating views
- ReactDOM is the library used to actually render the UI in the browser
- React is a library that is designed to update the browser DOM for us
- The virtual DOM is made up of React elements, which conceptually seem similar to HTML elements, but are actually JavaScript objects
- It is much faster to work directly with JavaScript objects than it is to work with the DOM API
- Updating or changing rendered DOM elements in JavaScript is relatively easy. However, the process of inserting new elements is painfully slow
- We make changes to a JavaScript object, the virtual DOM, and React renders those changes for us using the DOM API as efficiently as possible
- ReactDOM contains the tools necessary to render React elements in the browser
- ReactDOM is where we will find the render method
- All the tools necessary to generate HTML from the virtual DOM are found in this library
- We can render a React element, including its children, to the DOM with ReactDOM.render
```js
React.createElement(
  type,
  [props],
  [...children]
)
```
- Create and return a new React element of the given type
- The type argument can be either a tag name string (such as 'div' or 'span'), a React component type (a class or a function), or a React fragment type
- All of the DOM rendering functionality in React has been moved to ReactDOM because we can use React to build native applications as well
- The browser is just one target for React
---
```html
<html>
<head>
    <meta charset="utf-8">
    <title>React</title>
</head>
<body>
<div id="container"></div>
<script src="react.js"></script>
<script src="react-dom.js"></script>
<script>
     // Pure React and JavaScript code
      ReactDOM.render(
          elements,
          document.getElementById('container')
      )
</script>
</body>
</html>
```
- Creating elements in `React`:
```js
const element = React.createElement("h1",
    { id: "recipe-0", 'data-type': "title"}, "Baked Salmon")
```
Results in:
```html
<h1 data-reactroot id="recipe-0" data-type="title">Baked Salmon</h1>
```
Logging the element:
```js
{
$$typeof: Symbol(React.element), "type": "h1",
"key": null,
"ref": null,
"props": {"children": "Baked Salmon"}, "_owner": null,
"_store": {}
}
```
- The `type` property of the React element tells React what type of HTML or SVG element to create
- The `props` property represents the data and child elements required to construct a DOM element
- The `children` property is for displaying other nested elements as text.
```js
React.createElement(
    "ul",
    null,
    React.createElement("li", null, "1 lb Salmon"),
    React.createElement("li", null, "1 cup Pine Nuts"),
    React.createElement("li", null, "2 cups Butter Lettuce"),
    React.createElement("li", null, "1 Yellow Squash"),
    React.createElement("li", null, "1/2 cup Olive Oil"),
    React.createElement("li", null, "3 cloves of Garlic")
)
```
```js
const items = [
  "1 lb Salmon",
  "1 cup Pine Nuts",
  "2 cups Butter Lettuce",
  "1 Yellow Squash",
  "1/2 cup Olive Oil",
  "3 cloves of Garlic"
]
React.createElement(
    "ul",
    { className: "ingredients" },
    items.map(ingredient =>
      React.createElement("li", null, ingredient)
)
```