import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import ProjectsNav from './pages/ProjectsNav';
import AnimatedCountdown from './pages/Projects/AnimatedCountdown/AnimatedCountdown';
import AnimatedNavigation from './pages/Projects/AnimatedNavigation/AnimatedNavigation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<ProjectsNav />}>
          <Route index element={<AnimatedCountdown />}></Route>
          <Route path='/AnimatedNavigation' element={<AnimatedNavigation />}></Route>
          <Route path='/AutoTextEffect' element={<AnimatedNavigation />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
