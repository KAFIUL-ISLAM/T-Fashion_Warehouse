import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFoundPage from './Components/CommonComp/NotFoundPage';
import Home from './Components/HomePage/Home';
import Login from './Components/Login/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;