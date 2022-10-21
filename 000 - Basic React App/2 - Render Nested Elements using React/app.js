const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(React.createElement(
  'ul',
  null,
  React.createElement('li', {style:{color:'red'}}, 'First')
));