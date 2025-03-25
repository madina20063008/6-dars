
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UsersList from './components/Card';
import UserDetail from "./components/UserDetail";
import { Routes, Route, useLocation } from "react-router-dom";
import Categories from './components/Categories';
import Card from './components/Card';

function App() {
  const location = useLocation();
  const isUserDetailPage = location.pathname.startsWith("/user/");

  return (
    <>
      <Header />
      <div className="flex w-[1100px] mx-auto mt-[50px] gap-[50px]">
      <Categories/>
      <Card />
      </div>
      <Footer />

    </>
  );
}

export default App;
