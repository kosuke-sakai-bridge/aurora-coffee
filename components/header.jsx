import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Header = () => {
  const [active, setActive] = useState(false)
  const toggleHamburger = () => {
    setActive(!active ? true : false)
  }

  return (
    <header className="l-header">
      <div className="l-header__inner">
        <h1>
          <div className="l-lg">
            <Link href="/">
              <a>
                <Image src="/common/img_logo.svg" alt='Aurora COFFEE' width={256} height={24}></Image>
              </a>
            </Link>
          </div>
          <div className="l-sm">
            <Link href="/">
              <a>
                <Image src="/common/img_logo_sp.svg" alt='Aurora COFFEE' width={220} height={20}></Image>
              </a>
            </Link>
          </div>
        </h1>
        <nav className="l-lg">
          <ul>
            <li>
              <Link href="/menu">
                <a>MENU</a>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <a>SHOP</a>
              </Link>
            </li>
            <li>
              <Link href="/news">
                <a>NEWS</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="l-sm">
          <div className={active ? "hamburger is-active" : "hamburger"}>
            <div onClick={toggleHamburger} className="hamburger__wrapper">
              <span className="hamburger__wrapper--line"></span>
              <span className="hamburger__wrapper--line"></span>
            </div>
            <nav className="nav-sp">
              <ul>
                <li>
                  <Link href="/menu">
                    <a>MENU</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop">
                    <a>SHOP</a>
                  </Link>
                </li>
                <li>
                  <Link href="/news">
                    <a>NEWS</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header