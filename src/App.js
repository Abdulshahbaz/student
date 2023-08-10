import Navigations from "./components/Navigations";
import Homes from "./components/Homes";
import './App.css';
import About from "./components/About";
import Menu from "./components/Menu";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
function App() {
  return (
    <>
   <Navigations/>
  <Homes/>
  <About/>
  <Menu/>
  <Products/>
  <Reviews/>
  <Contact/>
    </>
  );
}

export default App;
