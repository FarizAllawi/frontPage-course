import Head from 'next/head'
import Link from "next/link"
import axios from 'src/config/axios'
import Circle from 'public/images/circle-accent-1.svg'

import Header from 'src/parts/Header'
import Hero from 'src/parts/Hero'
import Clients from 'src/parts/Clients'
import ListCourses from 'src/parts/ListCourses'
import ListCategories from 'src/parts/ListCategories'

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>BWAMICRO</title>
        
      </Head>
      
      <main>
        <section className="header-clipping pt-10">
          <Circle className="absolute left-0 bottom-5"></Circle>
          <div className="sunshine"></div>
          <div className="container mx-auto">
            <Header></Header>
            <Hero></Hero>
          </div>
        </section>

        <section className="container mx-auto pt-24">
          <Clients></Clients>
        </section>

        <section className="container mx-auto pt-24">
          <ListCourses data={data.data}></ListCourses>
        </section>

        <section className="container mx-auto pt-24">
          <ListCategories></ListCategories>
        </section>
        
        <section className="container mx-auto pt-24">
          
        </section>

      </main>
    </>
  )
}

Home.getInitialProps = async () => {

  try {
    const data = await axios.get('/courses')
    return {data: data.data}

  } catch(Error) {
    return Error
  }
}
