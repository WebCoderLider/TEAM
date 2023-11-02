import './header.scss'

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
				<nav className='d-flex '>
          <ul className='d-flex gap-3 align-items-center '>
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
          </ul>
          <a href="" className='header__login__link'>Kirish</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
