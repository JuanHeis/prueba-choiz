import React, { useEffect, useContext } from "react"
import FaqSection from "../layout/FaqSection"
import Footer from "../layout/Footer"
import Header from "../layout/Header"
import Hero from "../layout/Hero"
import Context from '../../context/context';
import { FaqList } from "../../model/faqList"
import { MedicineList } from "../../model/medicineList"
import Modal from "./Modal"
import MedicinesSection from "../layout/MedicinesSection"



function Home() {
  const context: any = useContext(Context)

  useEffect(() => {

    const fetchData = async () => {
      const data = await (await fetch("https://run.mocky.io/v3/1f00949f-adc2-4484-ad6d-4f565e82ad30")).json()
      console.log("LA DATA DEL HOME: ", data)
      const datafaq = await (await fetch("https://run.mocky.io/v3/6f0fb5ae-1758-4537-84c7-f6669edd614f")).json()
      context.setValue({ faq: datafaq.data, medicines: data.data })
    }


    fetchData();
  }, [])

  return (
    <React.Fragment>

      <Header />
      <Hero />
      <MedicinesSection />
      <FaqSection ></FaqSection>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default Home