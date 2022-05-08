import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AddBook from './components/AddBook/AddBook';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import ManageBook from './components/ManageBook/ManageBook';
import MyBooks from './components/MyBooks/MyBooks';
import NotFound from './components/NotFound/NotFound';
import Registration from './components/Registration/Registration';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';

function App() {
  return (
    <div className="">
    <Header></Header>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
     <Route path='/manage-book' element={
      <RequireAuth>
      <ManageBook/>
      </RequireAuth>
    }></Route> 

    <Route path='/manage-book' element={
      <RequireAuth>
      <ManageBook/>
      </RequireAuth>
    }></Route> 
    {/* <Route path='/manage-book' element={<ManageBook/>}></Route> */}
    <Route path='/add-book' element={<AddBook/>}></Route>
    <Route path='/my-book' element={<MyBooks/>}></Route>

   <Route path='/blog' element={<Blog/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/registration' element={<Registration/>}></Route>
    <Route path='*' element={<NotFound/>}></Route>
    </Routes>
      
     <Footer></Footer> 
    </div>
  );
}

export default App;
