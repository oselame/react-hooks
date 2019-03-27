import React, {  useState } from 'react';

import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {

    const [resource, setResource] = useState('posts'); // array destruction
    // const [currentCount, setCount] = useState(0); // you can put many, many atributtes in the state


    return (
      <div className="ui container">
        <div>
          <button className="ui primary basic button" onClick={() => setResource('posts')}>Posts</button>
          <button className="ui secondary basic button" onClick={() => setResource('todos')}>Todos</button>
        </div>
        <UserList />
        <ResourceList resource={resource} />
      </div>
    );
  
}

export default App;
