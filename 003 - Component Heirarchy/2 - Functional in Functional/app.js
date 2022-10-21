const NewButton = () => <button>Click me in Function</button>

const NewApp = () => <div>
  <NewButton />
  <h1>Hello from Functional</h1>
</div>

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<NewApp />);