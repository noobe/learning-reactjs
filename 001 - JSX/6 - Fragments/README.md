# JSX
JSX stands for Javascript as XML. As you saw in the previous section, the `render` method accepts only React elements created using `React.createElement` and hence Nesting elements becomes difficult. To solve this issue Babel was introduced.

With Babel, we can write React elements in the JSX syntax which is a much stricter version of HTML and then depend on Babel to convert it into normal React elements.

Babel is added to the page using script tag:
```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
```
And to make sure that normal JS dont pick up the scripts written with JSX, we also have to mentiond `type="text/babel"` in our script tag.
```html
<script type="text/babel" src="./app.js"></script>
```
Once its ready, we can then start writing `render` method in the following format:
```js
root.render(<h1>Hello</h1>);
```

## Sections inside
1 - Rendering using JSX
```js
root.render(<h1>Hello</h1>);
```
2 - Render Nested JSX tags
```js
root.render(<ul>
  <li>First</li>
  <li>Second</li>
</ul>);
```
3 - Vars and Functions in JSX
```js
const name = 'Tom';
root.render(<h1>Hello {name}</h1>);
```
4 - JSX Branching
```js
let x = 5;
root.render(<h1>Hello {x > 5 ? 'More than Five' : 'Less than or equal to Five'}</h1>);
```
5 - JSX Looping
```js
const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Tim' }];
root.render(<ul>
  {users.map(user => <li key={user.id}>{user.name}</li>)}
</ul>);
```
6 - Fragments
```js
root.render(<>
  <h1>Hello</h1>
  <h3>Have a great day</h3>
</>);
```

