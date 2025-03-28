
import React, { useEffect, useState } from "react";
import plant from '../assets/plant.png'
const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const token = "67e1514e2ac3b760a778e38a";
    const apiUrl = `https://green-shop-backend.onrender.com/api/flower/category?access_token=${token}`;
    const [price, setPrice] = useState([0, 1000]);

    const handleChange = (event) => {
        const value = Number(event.target.value);
        const mid = (price[0] + price[1]) / 2;

        if (value < mid) {
            setPrice([value, price[1]]);
        } else {
            setPrice([price[0], value]);
        }
    };
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) throw new Error("Failed to fetch data");

                const data = await response.json();
                console.log("📢 API Response:", data);

                let categoryArray = [];

                if (data?.data?.categories) {
                    categoryArray = data.data.categories;
                } else if (Array.isArray(data.data)) {
                    categoryArray = data.data;
                } else {
                    console.error("❌ Unexpected API response structure:", data);
                }

                console.log("✅ Extracted Categories:", categoryArray);

                if (!Array.isArray(categoryArray) || categoryArray.length === 0) {
                    throw new Error("Categories array is empty or invalid");
                }

                setCategories([...categoryArray]);
            } catch (err) {
                console.error("❌ Error fetching data:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    console.log("🟢 Rendered Categories:", categories);

    if (loading) return <p className="text-gray-500">Loading...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;

    return (
        <div className=" p-4 bg-[#FBFBFB] shadow-md rounded-md w-64 ">
            <h2 className="text-lg font-semibold mb-2">Categories</h2>
            {categories.length === 0 ? (
                <p className="text-gray-500">No categories available.</p>
            ) : (
                <ul className="space-y-1">
                    {categories.map((category, index) => (
                        <li key={index} className="flex justify-between text-gray-700 mt-[10px]">
                            <span className="hover:text-green-600 cursor-pointer mt-[10px]">
                                {category.category_name || category.title || category.label || "Unnamed"}
                            </span>
                            <span className="text-gray-500 mt-[10px]">({category.count ?? 0})</span>
                        </li>
                    ))}
                </ul>
            )}
            <div className="mt-[20px]">
                <h3 className="text-lg font-semibold">Price Range</h3>

                <div className="relative mt-5">
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        value={price[0]}
                        onChange={handleChange}
                        className="absolute w-full h-1 bg-green-300 rounded-lg appearance-none pointer-events-none"
                    />
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        value={price[1]}
                        onChange={handleChange}
                        className="absolute w-full h-1 bg-green-600 rounded-lg appearance-none pointer-events-none"
                    />
                </div>

                <p className="mt-[40px] text-[16px] text-gray-700 ">
                    Price: <span className="text-green-600 font-bold">${price[0]} - ${price[1]}</span>
                </p>

                <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded">Filter</button>
                <img src={plant} alt="" className="mt-3"/>
            </div>
        </div>
    );
};

export default Categories;





