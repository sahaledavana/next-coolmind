import Head from 'next/head'
import Link from 'next/link'

import React, { useState } from "react";

let flag = true;

export default function CenterBanner({
    headline = "WINTER SALE ",
    text = "UP TO 50% OFF",
    buttonText = "Go shopping",
    buttonLink,
    width ,
    maxWidth,
    height,
    maxHeight,
    backgroundColor,
    buttonBackgroundColor,
    closeButtonClicked 
}) {
   
     const [displayBanner, setDisplayBanner] = useState(true);
     
     closeButtonClicked= ()  => {
        console.log("Inside close button"); 
        flag = false; 
        setDisplayBanner(false)
    };

    if (!displayBanner) {
        return null;
    }
    
    if(!flag)
    {
        return null;
    }

    return (
        <div
            className="banner_centered flex justify-center content-center flex-col items-center fixed z-50 inset-1/2 transform -translate-x-2/4 -translate-y-2/4 shadow-lg max-h-full overflow-auto max-w-full"
            style={{
                backgroundColor: backgroundColor || "#333333",
                height: height || "70%",
                maxHeight: maxHeight || "550px",
                width: width || "80%",
                maxWidth: maxWidth || "1000px",
            }}
        >
            <div
                className="cursor-pointer m-3 text-center absolute top-0 right-0 px-2 py-1"
                onClick={() => closeButtonClicked()}
            >
                X
            </div>
            <h1 className="my-0 uppercase text-7xl ">{headline}</h1>
            <div
                className="my-0 text-center uppercase prose  text-5xl "
                dangerouslySetInnerHTML={{ __html: text }}
            ></div>
            <Link href = "/"
                className="shadow-md py-3 px-5 mt-8 mb-4 rounded-lg"
                style={{ backgroundColor: buttonBackgroundColor || "#ffffff" }}               
            >
                {buttonText}
            </Link>
        </div>
    );
}