
class NewApp extends React.Component {
  constructor(props) {
    super(props);
  }
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
    return <div>
      <h1>Hello from Class</h1>
      <button onClick={() => {this.forceUpdate();}}>+</button>
    </div>;
  }
}

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<NewApp />);