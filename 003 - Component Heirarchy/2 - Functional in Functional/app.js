const NewButton = () => <button>Click me in Function</button>

const NewApp = () => <div>
  <NewButton />
  <h1>Hello from Functional</h1>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NewApp />);