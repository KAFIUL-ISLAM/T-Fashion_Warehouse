import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFoundPage from './Components/CommonComp/NotFoundPage';
import Home from './Components/HomePage/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;