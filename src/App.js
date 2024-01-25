
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import SingleMovie from './components/SingleMovie';
import { AppProvider } from './components/Context';

function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='movie/:id' element={<SingleMovie />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
