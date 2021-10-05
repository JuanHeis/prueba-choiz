import React, { useEffect, useContext } from "react"
import FaqSection from "../layout/FaqSection"
import Footer from "../layout/Footer"
import Header from "../layout/Header"
import Hero from "../layout/Hero"
import Context from '../../context/context';
interface FaqItem {
  id: string,
  title: string,
  description: string,
  enabled: boolean
}

interface FaqList {
  data: Array<FaqItem>;
}

function Home() {
  const context: any = useContext(Context)


  useEffect(() => {
    fetch("https://run.mocky.io/v3/6f0fb5ae-1758-4537-84c7-f6669edd614f").then((response) => {
      return response.json()

    }).then((faqlist: FaqList) => {
      console.log(context)
      context.setValue({ ...context.value, faq: faqlist.data })
    })

  }, [])

  return (
    <React.Fragment>
      <Header />
      <Hero />
      <FaqSection></FaqSection>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default Home