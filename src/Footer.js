import './Footer.css'

import logo from './footer-logo.png';


function Footer() {
    return (
      <footer>
        <div>
       <img alt="logo" src={logo} />
       </div>
       <div>
       <h4>Navigation</h4>
       <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
      </div>

      <div>
       <h4>Contact</h4>
       <ul>
        <li>2395 Maldove Way,</li>
        <li>Chicago Illinois</li>
        <li>(629)-243-6827</li>
        <li>info@littlelemon.com</li>
      </ul>
      </div>

      <div>
       <h4>Connect</h4>
       <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Join us!</li>
      </ul>
      </div>
       </footer>
    );
  }
  
  export default Footer;