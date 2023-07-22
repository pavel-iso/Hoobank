import React from 'react'
import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, Product} from "./components";
import MySection from "./components/MySection";
import MyNavBar from "./components/MyNavBar";
import Login from "./components/Login";

function NotLogin() {
  return (
    <div>
  <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.boxWidth}`}>
        <MyNavBar/>
      </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Product/>
        <Testimonials />
        <Clients />
      </div>
    </div>
    </div>
  <br />
  <br />
  <br />
  <div className="section">
  <MySection/>
  </div>
  <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default NotLogin