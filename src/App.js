import { useEthers, DAppProvider } from '@usedapp/core';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Main from './components/Main';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <DAppProvider config={{}}>
      <div>
        <Routes>
          <Route path='/' element={<div><Header /><Main /></div>} />
          <Route path='/dashboard' element={<div><Dashboard /></div>} />

        </Routes>

      </div>
    </DAppProvider>
  );
}

export default App;

