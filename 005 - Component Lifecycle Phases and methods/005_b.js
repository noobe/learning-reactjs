
class NewApp extends React.Component {
  constructor(props) {
    super(props);
    console.log('Constructor');
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return null;
  };

  componentDidMount(){
    console.log('componentDidMount');
  };

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  };

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  render() {
    console.log('Render');
    return <div>
      <h1>Hello from Class</h1>
      <button onClick={() => {this.forceUpdate();}}>+</button>
    </div>;
  }
  
}

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<NewApp />);