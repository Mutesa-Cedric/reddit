import type { NextPage } from 'next'
import Head from 'next/head'
import PostBox from '../components/PostBox'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Reddit - Dive into anything</title>
        <link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20class%3D%22_1O4jTk-dZ-VIxsCuYB6OR8%20%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cg%3E%3Ccircle%20fill%3D%22%23FF4500%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%2210%22%3E%3C%2Fcircle%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M16.67%2C10A1.46%2C1.46%2C0%2C0%2C0%2C14.2%2C9a7.12%2C7.12%2C0%2C0%2C0-3.85-1.23L11%2C4.65%2C13.14%2C5.1a1%2C1%2C0%2C1%2C0%2C.13-0.61L10.82%2C4a0.31%2C0.31%2C0%2C0%2C0-.37.24L9.71%2C7.71a7.14%2C7.14%2C0%2C0%2C0-3.9%2C1.23A1.46%2C1.46%2C0%2C1%2C0%2C4.2%2C11.33a2.87%2C2.87%2C0%2C0%2C0%2C0%2C.44c0%2C2.24%2C2.61%2C4.06%2C5.83%2C4.06s5.83-1.82%2C5.83-4.06a2.87%2C2.87%2C0%2C0%2C0%2C0-.44A1.46%2C1.46%2C0%2C0%2C0%2C16.67%2C10Zm-10%2C1a1%2C1%2C0%2C1%2C1%2C1%2C1A1%2C1%2C0%2C0%2C1%2C6.67%2C11Zm5.81%2C2.75a3.84%2C3.84%2C0%2C0%2C1-2.47.77%2C3.84%2C3.84%2C0%2C0%2C1-2.47-.77%2C0.27%2C0.27%2C0%2C0%2C1%2C.38-0.38A3.27%2C3.27%2C0%2C0%2C0%2C10%2C14a3.28%2C3.28%2C0%2C0%2C0%2C2.09-.61A0.27%2C0.27%2C0%2C1%2C1%2C12.48%2C13.79Zm-0.18-1.71a1%2C1%2C0%2C1%2C1%2C1-1A1%2C1%2C0%2C0%2C1%2C12.29%2C12.08Z%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
      </Head>
      <div className='bg-gray-100 min-h-screen'> 
        <PostBox/>
      </div>
    </div>
  )
}

export default Home
