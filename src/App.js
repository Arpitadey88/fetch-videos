import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import FetchVideos from './component/FetchVideos/FetchVideos';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FetchVideos/>
      <Footer/>
    </div>
  );
}

export default App;
