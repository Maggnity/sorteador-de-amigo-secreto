import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Card } from './components/Card';
import Formulario from './components/Formulario';

function App() {
  return (
    <div>
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path='/' element={<Formulario />}>
            </Route>
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
}

export default App;
