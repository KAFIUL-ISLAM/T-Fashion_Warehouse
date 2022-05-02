import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './Components/AddItems/AddItems';
import NotFoundPage from './Components/CommonComp/NotFoundPage';
import Home from './Components/HomePage/Home';
import Login from './Components/Login/Login';
import ManageItems from './Components/ManageItems8/ManageItems';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/additems' element={<AddItems></AddItems>}></Route>
        <Route path='/manageitems' element={<ManageItems></ManageItems>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;