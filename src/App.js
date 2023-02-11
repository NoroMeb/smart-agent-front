import { useEthers, DAppProvider } from '@usedapp/core';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Home/Navbar";
import Main from './components/Home/Main';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <DAppProvider config={{}}>
      <div>
        <Routes>
          <Route path='/' element={<div className='home'><Navbar /><Main /></div>} />
          <Route path='/dashboard' element={<div><Dashboard /></div>} />

        </Routes>

      </div>
    </DAppProvider>
  );
}

export default App;

