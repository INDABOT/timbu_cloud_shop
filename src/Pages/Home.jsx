import Categories from "../Components/ExploreCategories/Categories"
import FourthSection from "../Components/FourthSection/FourthSection"
import Hero from "../Components/Hero/Hero"
import Payment from "../Components/PaymentOption/Payment"
import SecondSection from "../Components/SecondSection/SecondSection"
import ThirdSection from "../Components/ThirdSection/ThirdSection"
import Footer from "../Layout/Footer/Footer"
import Header from "../Layout/Header/Header"


const Home = () => {
  return (
    <div>
       <Header />
       <Hero />
       <Categories text="Explore Categories" />
       <SecondSection />
       <ThirdSection />
       <FourthSection />
       <Categories text="Payment Options" />
       <Payment />
       <Footer />
    </div>
  )
}

export default Home