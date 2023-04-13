import React from 'react';

function App(){

    const [todos, setTodos] = React.useState(
        [
            {
                text:"learn React",
                isCompleted: false,
            }
        ]
    );
        const [value, setValue] = React.useState('');
        const handleSubmit = e => {
            e.preventDefault();
            if (!value) return;

            const newTodos = [...todos, {text:value,
            isCompleted:false}];
            setTodos(newTodos);
            setValue('');
        }

        return (
            <>
            {todos.map((todo, i) => <div key={i} className='App-list'>{todo.text}</div>)}

            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                className='App-input'
                value={value}
                placeholder='Add todo...'
                onChange={e => setValue(e.target.value)}
                />
            </form>
            </>
        );

}

export default App;