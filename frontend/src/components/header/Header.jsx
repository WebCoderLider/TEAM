import './header.scss'

import Logo from '../../assets/images/Logo.png'
import Xicon from '../../assets/images/Xicon.png'
import { useRef } from 'react'

const Header = () => {
  const menuNavbar = useRef()
  const menuList = useRef()

  const menuOpen = () => {
    menuNavbar.current.style.transform = 'translateX(0)'
    menuList.current.style.transform = 'translateX(0)'
    document.body.style.overflow = 'hidden'
  }

  const menuClose = () => {
    menuList.current.style.transform = 'translateX(100%)'
    menuNavbar.current.style.transform = 'translateX(100%)'
    document.body.style.overflow = 'auto'
  }

  return (
    <header className="header">
      <div className="container">
        <nav className="d-flex justify-content-between align-items-center">
          <a href="#">
            <img width={'60px'} src={Logo} alt="Logo" />
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
          <button
            className="responsive__navbar__button "
            onClick={menuOpen}
          ></button>
          <div ref={menuNavbar} className="responsive__navbar">
            <ul
              ref={menuList}
              className="gap-4 align-items-center header__responsive__list "
            >
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
            <button className=" menu__closer" onClick={menuClose}>
              <img src={Xicon} width={'30px'} alt="" />
            </button>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
