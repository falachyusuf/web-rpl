import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import NavPages from './components/NavPages';

function App() {
  return (
    <div className='flex'>
      <BrowserRouter>
        <div>
          <Sidebar />
        </div>
        <div>
          <NavPages />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
