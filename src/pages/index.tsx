import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Orders</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='max-w-[1200px] m-auto px-6 bg-zinc-200 h-screen pt-6 space-y-10'>
        <h1 className='text-2xl'>Wellcome back, nice to meet you!</h1>

        <button className='px-4 py-2 rounded-md bg-purple-900 text-white font-semibold hover:opacity-90 transition-all'>
          Logar com google
        </button>
      </main>
    </>
  )
}