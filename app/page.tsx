"use client";
import React, { useEffect, useState } from "react";
import Services from "../app/About/Components/Services";
import HPCarousel from "./Components/Carousel";
import FlashSales from "./Components/FlashSales";
import Sidebar from "./Components/Sidebar";
import ViewAllProdButton from "./Components/ViewAllProdButton";
import Categories from "./Components/Categories";
import ThisMonth from "./Components/ThisMonth";
import OurProducts from "./Components/OurProducts";
import NewArrival from "./Components/NewArrival";

export default function Home() {

  const [products, setProducts] = useState<products[]>([]);
  console.log(products);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching the products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-5 pr-5 gap-5">
      <div className="flex">
        <Sidebar />
        <HPCarousel />
      </div>
      <FlashSales data={products} />
      <ViewAllProdButton />
      <hr className="w-[1170px] mt-12 opacity-30 border-t border-black pb-10" />
      <Categories />
      <hr className="w-[1170px] opacity-30 border-t border-black pb-10" />
      <ThisMonth />
      <hr className="w-[1170px] opacity-30 border-t border-black pb-10 mt-10" />
      <OurProducts data={products} />
      <NewArrival />
      <Services />
    </main>
  );
}
