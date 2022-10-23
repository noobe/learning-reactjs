const App = () => {
  return <button>{props.myLabel}</button>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App name="Sreeraj"/>);