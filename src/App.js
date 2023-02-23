import { useEthers, DAppProvider } from '@usedapp/core';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddCollaboration from './components/Dashboard/pages/AddCollaboration';
import Collaborations from './components/Dashboard/pages/Collaborations';
import Videos from './components/Dashboard/pages/Videos';
import Test from './components/Test';
import SmartContract from './components/Dashboard/pages/SmartContract';
import EndCollaboration from './components/Dashboard/pages/EndCollaboration';
function App() {
  return (
    <DAppProvider config={{}}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="add-collaboration" element={<AddCollaboration />} />
          <Route path="collaborations" element={<Collaborations />} />
          <Route path="videos" element={<Videos />} />
          <Route path="smart-contract" element={<SmartContract />} />
          <Route path="end-collaboration" element={<EndCollaboration />} />
        </Route>
      </Routes>

    </DAppProvider>
  );
}

export default App;

