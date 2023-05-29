import './Nav.scss'
import {Link,NavLink} from 'react-router-dom'
const Nav = () => {
    return (<div className="topnav">
        <NavLink activeClassName="active" to="/" exact>Home</NavLink>
        <NavLink activeClassName="active" to="/timer">Timer</NavLink>
        <NavLink activeClassName="active" to="/todo">Todo</NavLink>
        <NavLink activeClassName="active" to="/blog">Blog</NavLink>
        <NavLink activeClassName="active" to="/secret">Secret</NavLink>
    </div>)
}
export { Nav };