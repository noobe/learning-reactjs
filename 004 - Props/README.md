# Props
Prop stand for properties. They are attributes that we can pass to a component while we invoke it. There values can be then used in the component to deside what it renders or how it behaves once rendered.

Passing data as Prop:
In class components the prop values are available in `this.state.props` object.
In functional components it is available in the `props` argument in the functional component.
```js
const Banner = props => <button>{props.myLabel}</button>

class App extends React.Component {
  render() {
    return <div>
      <Banner myLabel="The functional button" />
      <h1>Hello {this.props.name}</h1>
    </div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App name="Sreeraj"/>);
```
Prop Drilling:
In some scenarios the data is available in a top level component and then might be required by a desendant element in its component tree. This result in passing data from the prop of the parent element to its child - on all levels - all the way until it reaches the component that needs it. This is irrespective of weather the intermediate level component needs the data or not. This resultant pattern is know as `Prop Drilling`
```js
const Label = props => <h1>{props.text}</h1>

const Banner = props => <button><Label text={props.myLabel}/></button>

class App extends React.Component {
  render() {
    return <div>
      <Banner myLabel={this.props.name} />
      <h1>Hello</h1>
    </div>;
  }
}
```
