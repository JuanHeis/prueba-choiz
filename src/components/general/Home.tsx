import React from "react"
import FaqSection from "../layout/FaqSection"
import Footer from "../layout/Footer"
import Header from "../layout/Header"
import Hero from "../layout/Hero"

function Home() {
    return (<React.Fragment>
        <Header></Header>
        <Hero></Hero>
        <FaqSection></FaqSection>
       <Footer></Footer>
    </React.Fragment>)
}

export default Home