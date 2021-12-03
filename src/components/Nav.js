import {useState} from 'react';
import { NavLink } from 'react-router-dom';

function Nav(){
  
  const [active, setActive] = useState('nav')
  const actual = active === 'nav' ? 'nav nav--show' : 'nav';
  
  return(
    <>
      <div className="btnNav-container">
        <span id="btn-nav" onClick={() => setActive(actual)}><i class="fas fa-align-justify"></i> Menu</span>
      </div>
      <nav className={active}>
        <ul className="nav__lista">
          <li className="nav__item">
            <NavLink to='/' className="nav__link">Inicio</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to='/costa' className="nav__link">Costa</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to='/sierra' className="nav__link">Sierra</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to='/selva' className="nav__link">Selva</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to='/contacto' className="nav__link">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
