# State
The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.

Initially only Class based components had support for State. Later on due to the introduction of Hooks, functional components could also support states.

Class Components:
We can initialize state values in the class `constrctor` method.
State object can be accessed in the class as `this.state`.
Later the state can be updated using `this.setState` method which take in the new state object as its param.
State should never be updated directly using `this.state` as React would be unaware of the update made and avoid re-render and any new changes happening to state in subsequent code would be unaware of the change and will overqrite it.
```js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Sarath',
    }
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick(params) {
    this.setState({ name: 'Sreeraj'})
  }

  render() {
    return <div>
      <h1>Hi {this.state.name}!</h1>
      <button onClick={this.handleClick}>update name</button>
    </div>
  }
}
```

Function based components:
We can use the `React.useState` hook to add state objects to functional components.
`React.useState` takes in an initial value of state and returns an array that contains the state variable and its setter method as its 1st and 2nd element.
State variables are available in the return markup as its inside the functional component as a function scoped value.
```js
const App = () => {
  const [ name, setName ] = React.useState('Sarath');
  const handleClick = () => {
    setName('Sreeraj')
  };

  return <div>
    <h1>Hi {name}!</h1>
    <button onClick={handleClick}>update name</button>
  </div>
}
```