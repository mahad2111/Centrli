import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Footer from "./components/footer/Footer";
import Events from "./components/events/Events";
import { Faq, Signup,Home,Ad1} from "./components";



function App() {
  return (
    <>
    
      <header className="header-bg"> 
        <Navbar />
      </header>
      <div className="search-bg">
      <Search />
      </div>
      <Ad1 />
      <div className="home-bg">
      <Home  />
      <Signup />
      <Events />
      <Faq />
      <Footer />
      </div>
      
    </>
  );
}



export default App;
