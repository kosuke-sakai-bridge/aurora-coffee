import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// コンポーネント
import Title from '../components/top/title'
import Card from '../components/top/card'
import Button from '../components/button'
import News from '../components/top/news'

const Home = () => {
  return (
    <>
      <Head>
        <title>Aurora COFFEE</title>
        <meta name="og:title" content="Aurora COFFEE" />
      </Head>

      <div className="top">
        <div className="l-wrapper">
          <div className="l-content">
            <main className="l-main">

              {/* mv */}
              <div className="top__mv">
                <h2>Tastes Like<br />A Dream</h2>
              </div>

              {/* lead */}
              <div className="top__lead">
                <div className="top__lead--text">
                  <h3 data-subtitle="OUR CONCEPT">Tastes Like<br />A Dream</h3>
                  <p>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
                  </p>
                </div>
                <div className="top__lead--image">
                  <Image src="/top/img_lead.jpg" alt="" width={565} height={565}></Image>
                </div>
              </div>

              {/* eyecatch */}
              <div className="top__eyecatch">
                <div className="top__eyecatch--copy">
                  <img src="/top/img_typography.svg" alt="Tastes Like A Dream" />
                  <img src="/top/img_typography.svg" alt="Tastes Like A Dream" />
                </div>
              </div>

              {/* menu */}
              <div className="top__menu">
                <Title title='MENU' />
                <ul>
                  <Card src={'/top/img_01.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                  <Card src={'/top/img_01.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                  <Card src={'/top/img_01.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                  <Card src={'/top/img_01.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                </ul>
                <nav><Button link={'/'} name='View More' /></nav>
              </div>

              {/* shop */}
              <div className="top__shop">
                <div className="top__shop--image">
                  <Image src="/top/img_shop.jpg" alt="" width={640} height={427}></Image>
                </div>
                <div className="top__shop--text">
                  <Title title='SHOP' />
                  <dl>
                    <dt>京都本店 2022年8月1日OPEN！</dt>
                    <dd>京都府京都市中京区饅頭屋町595-3 大同生命ビル6F</dd>
                  </dl>
                  <p>9:00-21:00(L.0. 20:30)</p>
                  <Button link={'/'} name='View More' />
                </div>
              </div>

              {/* news */}
              <div className="top__news">
                <div className="top__news--left">
                  <Title title='NEWS' />
                  <nav>
                    <Link href="/">
                      <a>View ALL</a>
                    </Link>
                  </nav>
                </div>
                <ul className="top__news--right">
                  <News link={'/'} date={'2022-06-01'} time='2022.06.01' title='サイトリニューアルしました。' />
                  <News link={'/'} date={'2022-06-01'} time='2022.06.01' title='サイトリニューアルしました。' />
                  <News link={'/'} date={'2022-06-01'} time='2022.06.01' title='サイトリニューアルしました。' />
                </ul>
              </div>

              {/* image */}
              <div className="top__image"></div>

            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home