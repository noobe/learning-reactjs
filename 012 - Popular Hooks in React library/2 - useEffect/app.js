const App = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {

  });

  React.useEffect(() => {

  }, []);

  React.useEffect(() => {

  }, [count]);

  React.useEffect(() => {
    return () => {
      
    }
  }, []);

  return <button onClick={() => { setCount(count+1); }}>{count}</button>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);