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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App name="Sreeraj"/>);