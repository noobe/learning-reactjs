const App = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log('useEffect without dependency array');
  });

  React.useEffect(() => {
    console.log('useEffect with empty dependency array');
  }, []);

  React.useEffect(() => {
    console.log('useEffect with state variable in dependency array');
  }, [count]);

  React.useEffect(() => {
    console.log('useEffect with empty dependency array during init');
    return () => {
      console.log('useEffect with empty dependency array during return');
    }
  }, []);

  return <button onClick={() => { setCount(count+1); }}>{count}</button>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);