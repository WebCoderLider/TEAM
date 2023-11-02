import './header.scss'

import Logo from '../../assets/images/Logo.png'
import { useRef } from 'react'
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="d-flex justify-content-between">
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
          <ul className="gap-4 align-items-center header__list ">
            <li>
              <a className="text-black header__navbar__links" href="#">
                Asosiy
              </a>
            </li>
            <li>
              <a className="text-black header__navbar__links" href="#">
                Kurslar
              </a>
            </li>
            <li>
              <a className="text-black header__navbar__links" href="#">
                Servislar
              </a>
            </li>
            <li>
              <a className="text-black header__navbar__links" href="#">
                Bog'lanish
              </a>
            </li>
            <a href="" className="header__login__link">
              Kirish
            </a>
          </ul>

          <div className="responsive__navbar">
            <ul className="gap-4 align-items-center header__responsive__list ">
              <li>
                <a
                  className="text-black header__navbar__responsive__links"
                  href="#"
                >
                  Asosiy
                </a>
              </li>
              <li>
                <a
                  className="text-black header__navbar__responsive__links"
                  href="#"
                >
                  Kurslar
                </a>
              </li>
              <li>
                <a
                  className="text-black header__navbar__responsive__links"
                  href="#"
                >
                  Servislar
                </a>
              </li>
              <li>
                <a
                  className="text-black header__navbar__responsive__links"
                  href="#"
                >
                  Bog'lanish
                </a>
              </li>
              <a href="" className=" header__login__responsive__link">
                Kirish
              </a>
            </ul>
            <button className="btn btn-danger">&#x2613;</button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
