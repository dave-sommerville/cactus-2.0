import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import FloatingHeader from './components/FloatingHeader';
import Memories from './pages/Memories';
import PastShows from './pages/PastShows';
import Contact from './pages/Contact';
import About from './pages/About';
import RehearsalGallery from './pages/RehearsalGallery';
import {currentShow} from './DAL/ShowList';

function App() {
  return (
    <BrowserRouter>
      {/* <header class="f-col hero-banner" id="page-top"></header> */}
      <FloatingHeader />
      <Routes>
        <Route path='/' element={<SplashPage/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/memories' element={<Memories />} />
        <Route path='/rehearsal-gallery' element={<RehearsalGallery />} />
        <Route path='/past-shows' element={<PastShows/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
