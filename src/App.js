import logo from './logo.svg';
import './App.css';
import { Nav } from './views/Nav';
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './views/todo';
import Covid from './views/Covid'
import { CountDown } from './views/Countdown';
import NewCountDown from './views/NewCountDown';
import Blog from './views/Blog';
import DetailBlog from './views/DetailBlog';
import AddNewBlog from './views/AddNewBlog';
import Test from './views/Test';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
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
  const onTimeUp = () => {
    // alert('Time ups')
  }


  // dung map khong sua du lieu cua bien goc

  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <Nav />
      
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
          <Route path='/' exact>
            <Covid />
          </Route>
          <Route path='/timer'>
            <NewCountDown />
            <CountDown onTimeUp={onTimeUp} />
          </Route>
          <Route path="/todo">

            <Todo todos={todos} deleteTodo={deleteTodo} title="Hiep's todo" />
            <input type="text" onChange={(event) => handleChange(event)} value={address} />


            <button onClick={() => handleClick()} >Click me</button>
          </Route>
          <Route path='/blog' exact>
              <Blog/>
          </Route>
          <Route path='/blog/:id' exact>
             <DetailBlog/>
          </Route>
          <Route path='/add-new' >
              <AddNewBlog/>
          </Route>
        </Switch>

        </header>
       
      </div>
    </Router>
  );
}

export default App;
