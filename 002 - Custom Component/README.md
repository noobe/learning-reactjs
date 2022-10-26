# Custom Components
React allows us to group elements to form custom Components. These components can be then combined to form complex UIs.

There are 2 ways to create components in React:

Class based components:
- Class based components: By extending the standard React classes `React.Component` and `React.PureComponent`.
- Functional components: By creating a function that returns markup.

Once a component is created, it can then be passed to the `render` method

Class based
```js
class App extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

A class based component should contain a method called render that returns a markup.

Function based
```js
const NewApp = () => <h1>Hello!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NewApp />);
```

As seen in the examples above Class based component needs more code to get the same result as a Functional Component.

But in early days of React, class based components had more extendable behaviour compared to function based components like state and lifecycle methods.

This resulted in stateless and simple components like tiles and banners being created as functional components and more complex ones with user interaction, being made as class based components.

In later versions of React, due to the introduction of Hooks, we were able to selectively extend the capability of functional components using hooks making function based components, the more prefered way of creating React components.