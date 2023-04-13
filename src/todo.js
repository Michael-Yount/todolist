import React from "react";
import './App.css'


function Todo({todo, index, remove}) {
    function handle() {
        remove(index);
    }
    return (
    <div 
    onClick={handle}
    className='App-list'>{todo.text}&#160;&#160;&#160;<span>&times;</span></div>
    );
}
export default Todo;