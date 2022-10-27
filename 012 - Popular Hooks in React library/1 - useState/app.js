const App = () => {
  const [count, setCount] = React.useState(0);
  return <button onClick={() => { setCount(count+1); }}>{count}</button>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);