import { Navbar, Home, About, Services, Teacher, Contact, Footer, } from "./components/index"

function App() {

  return (
    <>
      <div className="App font-Montserrat bg-Solitude">
        {/* <AlertMsg /> */}
        <Navbar />
        <Home />
        <About />
        <Services />
        <Teacher />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
