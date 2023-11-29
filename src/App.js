
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Instrument from './Components/Instrument';
import Offers from './Components/Offers';
import Objectives from './Components/Objectives';
import Qualities from './Components/Qualities';
     
function App() {
  return (
    <div className="text-center bg-black/90 ">
      <NavBar/>
      <Home/>
      <Instrument/>
      <Offers/>
      <Objectives/>
      <Qualities/>
      <Footer/>
    </div>
  );
}


export default App;
