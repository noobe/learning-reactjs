const Banner = props => <button>{props1.myLabel}</button>

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