import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import TripPlanning from './components/trip planning/TripPlanning';
import LocalAssistance from './components/local assistance/LocalAssistance';
import Help from './components/help/Help';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='w-[max-content] mx-auto'>
      <Navbar />

      <Routes>
        <Route path="/" element={<TripPlanning />} />
        <Route path="/localassistance" element={<LocalAssistance />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
