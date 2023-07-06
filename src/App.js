// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthLayout from './Layouts/AuthLayout';
import HomePage from './pages/HomePage';
import BlogsPage from './pages/BlogsPage';
import CosplayPage from './pages/CosplayPage';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import NewsPage from './pages/NewsPage';
import PostPage from './pages/PostPage';

const App = () => {
  return (
    <>
      <Routes>
          <Route index={true} element={<HomePage/>}/>
          <Route path='post/kontak' element={<PostPage/>}/>
          <Route path='news' element={<NewsPage/>}/>
          <Route path='/cosplay' element={<CosplayPage/>}/>
          <Route path='/blogs' element={<BlogsPage/>}/>
          <Route path='/auth' element={<AuthLayout/>}>
          <Route path='signup' element={<Signup/>}></Route>
          <Route path='signin' element={<Signin/>}></Route>
          
          

        </Route>
      </Routes>
    </>
  );
};

export default App;
