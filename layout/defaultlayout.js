import Head from 'next/head'
import { Footer, Header } from "../components"

function defaultlayout({children}) {
  return (
    <div>
        <Head>
        <title>NEXT BLOG</title>
        <meta name="description" content="A simple blog to practice nextjs and tailwindcss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <Header></Header>
            <main>
                {children}
            </main>
        <Footer></Footer>
    </div>
  )
}

export default defaultlayout