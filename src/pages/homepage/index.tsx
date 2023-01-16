import { Footer, Header } from "components"
import { Benefits, Intro, Membership, Mentorship, Packages, Values, Vision } from './components'

export const Homepage = () => {


  return (
    <>
      <div className="bg-networkDark bg-no-repeat bg-cover">
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
