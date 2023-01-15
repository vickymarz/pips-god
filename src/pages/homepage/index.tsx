import { Footer, Header } from "components"
import { Benefits, Intro, Membership, Mentorship, Packages, Values, Vision } from './components'

export const Homepage = () => {


  return (
    <>
      <div id="hero" className="bg-hero-pattern-mobile md:bg-hero-pattern bg-no-repeat">
      <div id="hero" className="bg-overlayImg bg-no-repeat">
        <Header />
        <Intro />
        </div>
        </div>
      <Values />
      <Vision />
      <Mentorship />
      <Packages />
      <Benefits />
      <Membership />
      <Footer />
    </>
  )
}