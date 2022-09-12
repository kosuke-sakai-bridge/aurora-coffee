import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Card from '../components/card'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs' 

const News = () => {
  return (
    <>
      <Head>
        <title>NEWS | Aurora COFFEE</title>
        <meta name="og:title" content="Aurora COFFEE" />
      </Head>

      <div className="menu">
        <div className="l-wrapper">
          <div className="l-content">
            <main className="l-main">

              {/* mv */}
              <div className="c-mv">
                <h1>NEWS</h1>
              </div>

              <div className="menu__list">
                <Tabs>
                  <TabList>
                    <Tab>ALL</Tab>
                    <Tab>DRINK</Tab>
                    <Tab>SWEETS</Tab>
                  </TabList>
                  <TabPanel>
                    <ul>
                      <Card src={'/menu/img_01.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_01.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_01.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_01.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_01.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_01.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_01.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_01.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_01.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_01.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_01.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_01.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                    </ul>
                  </TabPanel>
                  <TabPanel>
                    <ul>
                      <Card src={'/menu/img_02.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_02.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_02.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_02.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_02.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_02.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_02.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_02.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_02.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_02.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_02.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_02.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                    </ul>
                  </TabPanel>
                  <TabPanel>
                    <ul>
                      <Card src={'/menu/img_03.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_03.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_03.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_03.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_03.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_03.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_03.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_03.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_03.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_03.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_03.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                      <Card src={'/menu/img_03.jpg'} alt={'Coffee Cocktails'} title='Coffee Cocktails' price='￥600' />
                    </ul>
                  </TabPanel>
                </Tabs>
              </div>

            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default News