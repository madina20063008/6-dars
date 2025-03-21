
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UsersList from './components/Card';
import UserDetail from "./components/UserDetail";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isUserDetailPage = location.pathname.startsWith("/user/");

  return (
    <>
      {!isUserDetailPage && <Header />}
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
      {!isUserDetailPage && <Footer />}
    </>
  );
}

export default App;
