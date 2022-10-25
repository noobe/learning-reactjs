# JSX
JSX stands for Javascript as XML. As you saw in the previous section, the `render` method accepts only React elements created using `React.createElement` and hence Nesting elements becomes difficult. To solve this issue Babel was introduced.

With Babel, we can write React elements in the JSX syntax which is a much stricter version of HTML and then depend on Babel to convert it into normal React elements.

Babel is added to the page using script tag:
```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
```
And to make sure that normal JS dont pick up the scripts written with JSX, we also have to mentiond `type="text/babel"` in our script tag.

Once its ready, we can then start writing `render` method in the following format:
```js
root.render(<h1>Hello</h1>)
```

## Sections inside
1 - Rendering using JSX
2 - Render Nested JSX tags
3 - Vars and Functions in JSX
4 - JSX Branching
5 - JSX Looping
6 - Fragments

