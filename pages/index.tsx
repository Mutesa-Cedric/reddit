import type { NextPage } from 'next'
import Head from 'next/head'
import PostBox from '../components/PostBox'

const Home: NextPage = () => {
  return (
    <div className="max-w-5xl my-7 mx-auto">
      <Head>
        <title>Reddit - Dive into anything</title>
        <link rel="icon" href="https://www.redditstatic.com/desktop2x/img/favicon/ms-icon-144x144.png"/>
      </Head>
      <PostBox />

      <div className='flex'>
      </div>
    </div>
  )
}

export default Home
