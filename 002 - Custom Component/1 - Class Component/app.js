/* Class based component */

class App extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(<App />);