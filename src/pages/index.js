import Head from 'next/head'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Code-Krishna</title>
        <meta name="description" content="Codekrishna.com chanting the krishna" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     Hey this is codekrishna
     <div className="mx-4 bg-white text-yellow-900">This is me</div>
     <div className="mx-4 text-yellow-900 bg-lime-400">This is me</div>
    </>
  )
}
