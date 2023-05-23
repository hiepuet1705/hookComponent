import logo from './logo.svg';
import './App.css';
import { Nav } from './views/Nav';
import React from 'react'
import { useState } from 'react';
const App = () => {

  const [name, setName] = useState('Hiep');
  const [address, setAddress] = useState('')
  const [todos, setTodos] = useState([
    { id: 1, title: 'Learning JS (ReactJS)' },
    { id: 2, title: 'Playing game' },
    {id: 3, title: 'Doing homework OOP' },
  ]);
  const handleClick = () => {
    if(!address){
      alert('Please fill missing information ');
      return; 
    }
    let todo = {id: 'abc', title:address}
    setTodos([...todos,todo]);
    setAddress('')
  }
  const handleChange = (event) => {
    setAddress(event.target.value);
  }

  // dung map khong sua du lieu cua bien goc

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {name} from {address} </p>

        <div className='todos-container'>
          {todos && todos.length > 0 && todos.map((item, index) => {
             return (<li className='todo-child' key={item.id}>{index + 1} - {item.title} </li>)
             }
          )}
        </div>
        <input type="text" onChange={(event) => handleChange(event)} value={address} />


        <button onClick={() => handleClick()} >Click me</button>
      </header>
    </div>
  );
}

export default App;
