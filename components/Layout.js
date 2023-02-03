import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../utils/Store";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import BootstrapCarousel from "../carsol/Bootstrap";

export default function Layout({ title, children }) {
  console.log("Inside cart");
  return (
    <>
      <header>
        <TopBar />
      </header>
      
      <div className="">
        <main className=" m-auto ">{children}</main>
        <Footer />
      </div>
    </>
  );
}
