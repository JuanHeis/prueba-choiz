import React, { useEffect, useContext } from "react"
import FaqSection from "../layout/FaqSection"
import Footer from "../layout/Footer"
import Header from "../layout/Header"
import Hero from "../layout/Hero"
import Context from '../../context/context';
import { FaqList } from "../../model/faqList"
import { MedicineList } from "../../model/medicineList"
import Modal from "./Modal"



function Home() {
  const context: any = useContext(Context)

  useEffect(() => {
    const fetchDataFaq = () => {
      fetch("https://run.mocky.io/v3/6f0fb5ae-1758-4537-84c7-f6669edd614f").then(async (response) => {
        return await response.json()
      }).then((faqlist: FaqList) => {
        console.log(context)
        context.setValue({ ...context.value, faq: faqlist.data })
      })
    }
    const fetchDataMedicine = () => {
      fetch("https://run.mocky.io/v3/1f00949f-adc2-4484-ad6d-4f565e82ad30").then(async (response) => {
        return await response.json()
      }).then((medicineList: MedicineList) => {
        console.log(context)
        context.setValue({ medicines: medicineList.data, ...context.value })
        console.log("Medicnes: ", medicineList)
      })
    }
    fetchDataFaq();
    // fetchDataMedicine();
  }, [])

  return (
    <React.Fragment>

      <Header />
      <Hero />
      <FaqSection ></FaqSection>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default Home