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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);