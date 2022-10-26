const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Tim' }];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ul>
  {users.map(user => <li key={user.id}>{user.name}</li>)}
</ul>);