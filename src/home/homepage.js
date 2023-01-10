import Navbar from '../components/navbar'
import Footer from '../components/footer'
import TopCarousel from './components/slickHome'
import './style/homepage.scss'
import '../tailwind.css'

function Homepage() {
  return (
    <>
      <div className="home-index-container">
        <section className="home-navbar-sec">
          <Navbar />
        </section>
        <section className="home-top-carousel-sec relative">
          <div class="home-top-article-div absolute z-20 top-1/3 p-12 md:left-1/4 ">
            <p className="home-top-article text-amber-200 text-3xl font-bold md:text-4xl">
              Creating a better future through food.
            </p>
            <p className="home-top-article text-white text-xl pt-5 pl-1 md:text-2xl">
              An idea, a way of living, a way of eating.
            </p>
          </div>

          <TopCarousel />
        </section>
        <section className="home-footer-sec">
          <Footer />
        </section>
      </div>
    </>
  )
}
export default Homepage
