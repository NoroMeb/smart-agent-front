import { useEthers, DAppProvider } from '@usedapp/core';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Videos from './components/Dashboard/pages/Videos';
import Collaborations from './components/Dashboard/pages/Collaborations'
import Test from './components/Test';

function App() {
  return (
    <DAppProvider config={{}}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="videos" element={<Videos />} />
          <Route path="collaborations" element={<Collaborations />} />
        </Route>
      </Routes>

    </DAppProvider>
  );
}

export default App;

