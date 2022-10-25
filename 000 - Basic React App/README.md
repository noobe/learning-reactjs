# Basic React App

We can add React to any HTML page by assing the React and ReactDOM libraries to the page via script tag:

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

One the React and ReactDOM libs are available in the page, we need to identify a mount point for React in our HTML DOM.

```html
<div id="root"></div>
```

And then we can use the `createRoot` method in ReactDOM library to create a root node for the react App:
```js
const root = ReactDOM.createRoot(document.getElementById('root'));
```
And then use `render` method of the root to append React elements inside it.
```js
root.render(React.createElement('h1', null, 'Hello World'));
```
Note that these are React elements and not normal HTML elements. React elements can be created using the `createElement` method of the React library, which takes in the type of node, attributes and innerHTML content as its params:
```js
React.createElement('h1', null, 'Hello World')
```
