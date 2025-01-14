import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import FetchVideos from './component/FetchVideos/FetchVideos';
import Footer from './component/Footer/Footer';
import PexelsData from './component/PexelsData/PexelsData';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FetchVideos/>
      <PexelsData/>
      <Footer/>
    </div>
  );
}

export default App;
