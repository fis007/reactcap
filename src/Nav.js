import logo from './Logo.svg';
import './Nav.css'

function Nav() {
    return (
      <nav className='nav-list'>
        <img className='nav-img' alt="logo" src={logo} />

       
          
       <ul className="nav-ul">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>

       </nav>
    );
  }
  
  export default Nav;