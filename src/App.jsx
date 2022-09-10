import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index exact element={<HomePage />} />
          <Route path="*" element={<div> böyle bir sayfa yok</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
