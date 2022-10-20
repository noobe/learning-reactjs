
class App extends React.Component {
  componentDidMount(){
    console.log('Component Mounted');
  }
  componentDidUpdate(){
    console.log('Component Updated');
  }
  componentDidUpdate(){
    console.log('Component Will unmount');
  }
  render() {
    console.log('Render');
    return <div>
      <h1>Hello from Class</h1>
      <button onClick={() => {this.forceUpdate();}}>+</button>
    </div>;
  }
}

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(<App />);