import DisplayHero from '../Components/DisplayHero/DisplayHero'
import Review from '../Components/Review/Review'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Footer/Footer'
const Display = () => {
  return (
    <div>
       <Header />
       <DisplayHero />
       <Review />
       <Footer />
    </div>
  )
}

export default Display