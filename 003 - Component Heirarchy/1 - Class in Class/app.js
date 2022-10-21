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

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(<App />);