
// import React, { useState } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import CategoriesComponent from "./components/Categories";
// import ProductList from "./components/CardList";
// import CardNav from "./components/CardNav";
// import Dashboard from "./components/Dashboard";
// import Navbar from "./components/Navbar";

// const App = () => {
//     const location = useLocation();
//     const isUserDetailPage = location.pathname.startsWith("/user/");
//     const isDashboardPage = location.pathname === "/dashboard";

//     const [categoryType, setCategoryType] = useState("all-plants");
//     const [sortOption, setSortOption] = useState("default");

//     return (
//         <>
//             <Navbar />
//             {isDashboardPage ? (
//                 <>
//                     <Dashboard />
//                 </>
//             ) : (
//                 <>
//                     <Header />
//                     <div className="flex w-[1100px] mx-auto mt-[50px] gap-[50px]">
//                         {!isUserDetailPage && (
//                             <CategoriesComponent
//                                 selectedCategory={categoryType}
//                                 setSelectedCategory={setCategoryType}
//                             />
//                         )}
//                         <div>
//                             <CardNav setCategoryType={setCategoryType} setSortOption={setSortOption} />
//                             <ProductList categoryType={categoryType} sortOption={sortOption} />
//                         </div>
//                     </div>
//                 </>
//             )}
//             <Footer />
//         </>
//     );
// };

// export default App;
// import React from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Dashboard from "./components/Dashboard";
// import Navbar from "./components/Navbar";
// import PlantPage from "./components/PlantPage";

// const App = () => {
//   const location = useLocation();
//   const isUserDetailPage = location.pathname.startsWith("/user/");
//   const isDashboardPage = location.pathname === "/dashboard";

//   return (
//     <>
//       <Navbar />
//       {isDashboardPage ? (
//         <Dashboard />
//       ) : (
//         <>
//           <Header />
//           <PlantPage isUserDetailPage={isUserDetailPage} />
//         </>
//       )}
//       <Footer />
//     </>
//   );
// };

// export default App;
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import PlantPage from "./components/PlantPage";

const App = () => {
  const location = useLocation();
  const isUserDetailPage = location.pathname.startsWith("/user/");
  const isDashboardPage = location.pathname === "/dashboard";

  return (
    <>
      <Navbar />
      {isDashboardPage ? (
        <Dashboard />
      ) : (
        <>
          <Header />
          <PlantPage isUserDetailPage={isUserDetailPage} />
        </>
      )}
      <Footer />
    </>
  );
};

export default App;
