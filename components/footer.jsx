import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="l-footer">
      <div className="l-footer__inner">
        <div className="l-footer__inner--logo">
          <Link href="/">
            <a>
              <Image src="/common/footer_logo.svg" alt='Aurora COFFEE' width={300} height={28}></Image>
            </a>
          </Link>
        </div>
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
        <small>copyright Aurora COFFEE all rights reserved 2022.</small>
      </div>
    </footer>
  )
}

export default Footer