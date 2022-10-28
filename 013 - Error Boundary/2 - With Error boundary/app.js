const Banner = props => <button>{props1.myLabel}</button>

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    
  }

  render() {
    if (this.state.hasError) {
      return <>
        <h1>Something went wrong.</h1>
        <p>{this.state.error.message}</p>
        <p>{this.state.error.stack}</p>
      </>
    }

    return <div>
    {this.props.children}
    <h1>Hello {this.props.name}</h1>
  </div>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App><Banner myLabel="The functional button" /></App>);