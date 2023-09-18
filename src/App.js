import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import {ProjectsNav} from './pages/ProjectsNav';
import {AnimatedCountdown} from './pages/Projects/AnimatedCountdown/AnimatedCountdown';
import {AnimatedNavigation} from './pages/Projects/AnimatedNavigation/AnimatedNavigation';
import {AutoTextEffect} from './pages/Projects/AutoTextEffect/AutoTextEffect';
import {BackgroundSlider} from './pages/Projects/BackgroundSlider/BackgroundSlider';

function App() {
  return (
    <BrowserRouter basename="/50projects50days-react">
      <Routes>
        <Route path='/' exact element={<ProjectsNav />}>
          <Route index element={<AnimatedCountdown />}></Route>
          <Route path='/AnimatedNavigation' element={<AnimatedNavigation />}></Route>
          <Route path='/AutoTextEffect' element={<AutoTextEffect />}></Route>
          <Route path='/BackgroundSlider' element={<BackgroundSlider />}></Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
