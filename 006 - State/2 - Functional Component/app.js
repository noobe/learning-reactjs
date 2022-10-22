const App = () => {
  const [ name, setName ] = React.useState('Sarath');
  const handleClick = () => {
    setName('Sreeraj')
  };

  return <div>
    <h1>Hi {name}!</h1>
    <button onClick={handleClick}>update name</button>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);