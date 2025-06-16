import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Vlogs } from './pages/Vlogs';
import Recipes from './pages/Recipes';
import Storefront from './pages/Storefront';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/vlogs" element={<Vlogs />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/store" element={<Storefront />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
