import logo from './logo.svg';
import './App.css';
import { Nav } from './views/Nav';
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './views/todo';
import Covid from './views/Covid'
const App = () => {

  const [name, setName] = useState('Hiep');
  const [address, setAddress] = useState('')
  const [todos, setTodos] = useState([
    { id: 1, title: 'Learning JS (ReactJS)', type: 'hang' },
    { id: 2, title: 'Playing game', type: 'hiep' },
    { id: 3, title: 'Doing homework OOP', type: 'hiep' },
  ]);
  const [data, setData] = useState({});

  const deleteTodo = (id) => {
    const newTodo = todos.filter(item => item.id !== id)
    setTodos(newTodo);
  }

  const handleClick = () => {
    if (!address) {
      alert('Please fill missing information ');
      return;
    }
    let todo = { id: 'abc', title: address }
    setTodos([...todos, todo]);
    setAddress('')
  }
  const handleChange = (event) => {
    setAddress(event.target.value);
  }
 


  // dung map khong sua du lieu cua bien goc

  return (
    <div className="App">
     
      <header className="App-header">
      <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <Covid/>
       
        {/* <p>Hello {name} from {address} </p> */}


        {/* <Todo todos={todos} title="All Todos" deleteTodo={deleteTodo} />
        <Todo todos={todos.filter(item => { return item.type === 'hiep' })} deleteTodo={deleteTodo} title="Hiep's todo" />
        <input type="text" onChange={(event) => handleChange(event)} value={address} />


        <button onClick={() => handleClick()} >Click me</button> */}
      </header>
    </div>
  );
}

export default App;
