# Components Heirarchy
As we discussed before, React enables us to create custom components which can be combined to form complex UIs. Here we discuss some of the ways to do the composistion.

Class in Class: We can call a Class based component inside the render of another Class based component.
```js
class Button extends React.Component {
  render() {
    return <button>Click Me in class</button>
  }
}

class App extends React.Component {
  render() {
    return <div>
      <Button />
      <h1>Hello from Class</h1>
    </div>;
  }
}
```
Functional in Functional: We can call a Functional component inside the render of another Functional component.
```js
const NewButton = () => <button>Click me in Function</button>

const NewApp = () => <div>
  <NewButton />
  <h1>Hello from Functional</h1>
</div>
```
Class in Functional in Class: We can call a Functional component inside the render of a Class component and vice-a-versa.
```js
class Button extends React.Component {
  render() {
    return <button>Click Me in class</button>
  }
}

const Banner = () => <div><Button /><h3>This is a banner</h3></div>

class App extends React.Component {
  render() {
    return <div>
      <Banner />
      <h1>Hello from Class</h1>
    </div>;
  }
}
```
Component as nested child on another: We can nest a component inside another using closing tag instead of calling the parent component as self closing tag.
```js
class Button extends React.Component {
  render() {
    return <button>Click Me in class</button>
  }
}

const Banner = props => <div>{props.children}<h3>This is a banner</h3></div>

class App extends React.Component {
  render() {
    return <div>
      <Banner>
        <Button />
      </Banner>
      <h1>Hello from Class</h1>
    </div>;
  }
}
```
Component as RenderProp: We can also pass a component as a return value of a method that we can then pass to the parent component as a prop. We can then invode the method passed as prop inside the parent component in its render method.
```js
class Button extends React.Component {
  render() {
    return <button>Click Me in class</button>
  }
}

const Banner = props => <div>{props.render()}<h3>This is a banner</h3></div>

class App extends React.Component {
  render() {
    return <div>
      <Banner render={() => <Button />}/>
      <h1>Hello from Class</h1>
    </div>;
  }
}
```