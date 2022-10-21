// To render using React, we need to have a root element in the HTML page that can be used as a mount point for the React rendered content.
const root = ReactDOM.createRoot(document.getElementById('root'));

// We can then append React content into the mount point using render() method.
root.render(React.createElement('h1', null, 'Hello World'));