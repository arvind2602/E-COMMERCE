import React, { useRef } from "react";
import { useSelector } from "react-redux";

//import componets
import SuggestedFruits from "../components/SuggestedFruits";
import AllProducts from "../components/AllProducts";
import About from "./About";
import Contact from "./Contact";

function Home() {
	const productData = useSelector((state) => state.products.productList);

	const fruitsProducts = productData.filter(
		(item) => item.category === "fruits"
	);

	return (
		<div className=" w-full p-4 sm:p-8 " id="home">
			<div className="h-full mx-auto text-center flex flex-col gap-y-8">
				<h1 className="text-5xl font-bold  sm:max-w-[500px] lg:max-w-[900px] mx-auto">
					The Fastest Delivery{" "}
					<span className="text-red-600">in your Home</span>
				</h1>

				<p className="w-full text-sm sm:max-w-lg text-slate-600 tracking-wider mx-auto">
				"Welcome to Thakur Mart, your one-stop destination for all your grocery needs. At Thakur Mart, we are dedicated to making your grocery shopping experience convenient, affordable, and hassle-free. Browse through a wide selection of fresh produce, pantry essentials, delicious snacks, and household items, all from the comfort of your home. Our mission is to bring you the finest quality products, prompt delivery, and exceptional customer service. With Thakur Mart, grocery shopping has never been easier. Start filling your virtual cart today and let us take care of the rest, so you can spend more time on what truly matters. Join our growing family of satisfied customers and discover a new way to shop for groceries."
				</p>
				<button
					type="button"
					className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md w-3/4 sm:max-w-[350px] mx-auto"
				>
					Order Now
				</button>
			</div>

			{/* suggest fruits item in the first  */}
			<div className="mt-32 w-full">
				<SuggestedFruits fruitsProducts={fruitsProducts} />
			</div>

			{/* display all products */}
			<AllProducts heading={"Your Products"} />

			<About />
			<Contact />
		</div>
	);
}

export default Home;
