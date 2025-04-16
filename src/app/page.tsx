import Link from 'next/link'

const Home = () => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      Click <Link href='/documents/123'><span className='text-blue-500 underline'>&nbsp;here&nbsp;</span></Link> to go to documents page
    </div>
  )
}

export default Home