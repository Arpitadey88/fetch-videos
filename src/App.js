import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import FetchVideos from './component/FetchVideos/FetchVideos';
import Footer from './component/Footer/Footer';
import PexelsData from './component/PexelsData/PexelsData';
import HeroBanner from './component/HeroBanner/HeroBanner';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroBanner/>
      {/* <FetchVideos/>
      <PexelsData/> */}
      <Footer/>
    </div>
  );
}

export default App;
