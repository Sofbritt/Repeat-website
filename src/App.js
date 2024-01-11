import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Moments from './REPEAT SITE/pages/moments/Moments';
import Repeat from './REPEAT SITE/mainPage/Repeat';
import Header from './REPEAT SITE/repeat-header/Header';
import Footer from './REPEAT SITE/footer/Footer';
import Play from './REPEAT SITE/pages/plays/Play';
import Integration from './REPEAT SITE/pages/integration/Integration';
import Pricing from './REPEAT SITE/pages/pricing/Pricing';

function App() {
  return (
    <div className="App">


      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Repeat />} />
          <Route path='/moments' element={<Moments />} />
          <Route path='/plays' element={<Play />} />
          <Route path='/integrations' element={<Integration />} />
          <Route path='/pricing' element={<Pricing />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
