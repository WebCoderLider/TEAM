import './header.scss'

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
				<nav className='d-flex '>
          <ul className='d-flex gap-3 '>
            <li>
              <a className="text-black " href="#">
                Asosiy
              </a>
            </li>
            <li>
              <a className="text-black " href="#">
                Kurslar
              </a>
            </li>
            <li>
              <a className="text-black " href="#">
                Servislar
              </a>
            </li>
            <li>
              <a className="text-black " href="#">
                Bog'lanish
              </a>
            </li>
          </ul>
          <a href="">Kirish</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
