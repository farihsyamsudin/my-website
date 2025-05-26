import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import ProjectShowcase from './pages/ProjectShowcase';
import Page404 from './pages/Page404';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/project-showcase' element={<ProjectShowcase/>}></Route>
        <Route path='*' element={<Page404/>}/>

      </Routes>
    </>    
  );
}

export default App;
