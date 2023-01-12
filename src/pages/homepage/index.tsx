import { Header } from "components"
import { Intro }from './components'
export const Homepage = () => {
  return (
      <div className="relative">
        <div id="hero" className="bg-hero-pattern-mobile lg:bg-hero-pattern bg-fixed bg-no-repeat">
        <Header />
        <Intro />
      </div>
    </div>
  )
}
