let x = 5;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello {x > 5 ? 'More than Five' : 'Less than or equal to Five'}</h1>);