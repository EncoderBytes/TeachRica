import './App.css';
import DiscountHead from './components/common/DiscountHead';
import Footer from './components/common/Footer';
import Nav from './components/common/Nav';
import HomePage from "./components/HomePage"
import ContectPage from './components/HomePageComponent/ContectPage';
function App() {
  return (
    <div className="App">
      <DiscountHead/>
      <Nav/>

      <HomePage/>
      <ContectPage/>
    <Footer/>

    </div>

  );
}

export default App;
