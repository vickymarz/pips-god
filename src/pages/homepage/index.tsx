import { Footer, Header } from "components"
import { Benefits, Intro, Membership, Mentorship, Packages, Values, Vision } from './components'

export const Homepage = () => {


  return (
    <>
      <div id="hero" className="bg-hero-pattern-mobile lg:bg-hero-pattern bg-no-repeat">
        <Header />
        <Intro />
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
