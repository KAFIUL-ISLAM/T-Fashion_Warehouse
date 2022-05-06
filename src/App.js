import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './Components/AddItems/AddItems';
import Login from './Components/AuthenticationPage/Login';
import Register from './Components/AuthenticationPage/Register';
import NotFoundPage from './Components/CommonComp/NotFoundPage';
import Home from './Components/HomePage/Home';

import ManageItems from './Components/ManageItems/ManageItems';
import RequiredAuth from './Components/RequiredAuth/RequiredAuth';
import UpdateItem from './Components/UpdateItem/UpdateItem';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/additems' element={<RequiredAuth>
          <AddItems></AddItems>
        </RequiredAuth>}>
        </Route>
        <Route path='/manageitems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/manage/:id' element={<RequiredAuth>
          <UpdateItem></UpdateItem>
        </RequiredAuth>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;