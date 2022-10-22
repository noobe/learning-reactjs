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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);