
import React, { useEffect, useState } from "react";
import { ShoppingCart, Heart, Search } from "lucide-react";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const token = "67e1514e2ac3b760a778e38a";

    useEffect(() => {
        fetch(`https://green-shop-backend.onrender.com/api/flower/category/house-plants?access_token=${token}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched Data:", data);
                setProducts(data.data || []);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
            {products.length > 0 ? (
                products.map((product) => {
                    const discountPercent = product.discount_price
                        ? Math.round(((product.discount_price - product.price) / product.discount_price) * 100)
                        : 0;

                    return (
                        <div key={product.id} className="border rounded-lg p-3 shadow-lg w-[250px] bg-[#FBFBFB]">
                            <div className="relative w-[230px] h-[250px] mx-auto group">

                                {discountPercent > 0 && (
                                    <span className="absolute top-2 left-2 bg-green-600 text-white text-sm px-2 py-1 rounded">
                                        {discountPercent}% OFF
                                    </span>
                                )}

                                {product.main_image ? (
                                    <img
                                        src={product.main_image}
                                        alt={product.title}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                                        No Image
                                    </div>
                                )}

                                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="p-2 bg-white rounded-full shadow hover:bg-gray-200">
                                        <ShoppingCart className="w-5 h-5 text-gray-600" />
                                    </button>
                                    <button className="p-2 bg-white rounded-full shadow hover:bg-gray-200">
                                        <Heart className="w-5 h-5 text-gray-600" />
                                    </button>
                                    <button className="p-2 bg-white rounded-full shadow hover:bg-gray-200">
                                        <Search className="w-5 h-5 text-gray-600" />
                                    </button>
                                </div>

                            </div>

                            <div className="mt-3">
                                <h3 className="text-lg font-semibold text-gray-900">{product.title || "Unnamed"}</h3>
                                <div className="flex space-x-2 mt-1">
                                    <span className="text-green-600 font-bold text-lg">${product.price || "N/A"}</span>
                                    {product.discount === true && product.discount_price && (
                                        <span className="text-gray-400 text-lg line-through">${Number(product.discount_price)}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p className="col-span-4 text-center text-gray-500">No products available.</p>
            )}
        </div>
    );
};

export default ProductList;
