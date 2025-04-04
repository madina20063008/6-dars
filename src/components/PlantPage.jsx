import React, { useState } from "react";
import CategoriesComponent from "./Categories";  // Sidebar if needed
import CardNav from "./CardNav";
import ProductList from "./CardList";  // Product list component

const PlantPage = ({ isUserDetailPage }) => {
  const [categoryType, setCategoryType] = useState("all-plants");  // Default category set to "all-plants"
  const [sortOption, setSortOption] = useState("default");

  return (
    <div className="flex w-[1100px] mx-auto mt-[50px] gap-[50px]">
      {!isUserDetailPage && (
        <CategoriesComponent
          selectedCategory={categoryType}   // Sync category state with sidebar (if used)
          setSelectedCategory={setCategoryType}
        />
      )}
      <div>
        <CardNav
          setCategoryType={setCategoryType}   // Update categoryType when a button is clicked
          setSortOption={setSortOption}
          selectedCategory={categoryType}      // Active category for visual indication
        />
        <ProductList
          categoryType={categoryType}          // Fetch products based on the selected category
          sortOption={sortOption}
        />
      </div>
    </div>
  );
};

export default PlantPage;


