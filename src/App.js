import React from 'react';
import './App.css';

function App(){


  const [todos,setTodos] = React.useState(
    
    [

    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'fill the squirt gun',
      isCompleted: false,
    },
    {
      text: 'build app',
      isCompleted: false,
    }
  ]
  
  );
  
      return (
        
        <div className='App-container'>
  <>
    {todos.map((todo, i) => <div key={i} className='App-list'>{todo.text}</div>)}
  </>
    </div>
  
  );
}


export default App;
