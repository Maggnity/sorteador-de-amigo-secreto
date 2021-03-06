import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Configuracao } from './pages/Configuracao';

function App() {
  return (
    <div>
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path='/' element={<Configuracao />}>
            </Route>
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
}

export default App;
