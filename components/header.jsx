import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="l-header">
      <div className="l-header__inner">
        <h1>
          <Link href="/">
            <a>
              <Image src="/common/img_logo.svg" alt='Aurora COFFEE' width={256} height={24}></Image>
            </a>
          </Link>
        </h1>
        <nav>
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
    </header>
  )
}

export default Header