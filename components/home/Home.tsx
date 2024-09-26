"use client";

import { state } from "@/stores/store";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Hero from "./Hero/Hero";
import { useProxy } from "valtio/utils";
import { motion } from "framer-motion";
import ComponentWrapper from "../elements/ComponentWrapper";
import html2canvas from "html2canvas"; // Import html2canvas
import { useState } from "react";

export default function Home() {
  const global = useProxy(state);
  const [screenshot, setScreenshot] = useState<string | null>(null); // State to hold the screenshot

  const takePhoto = async () => {
    const canvas = await html2canvas(document.body); // Capture the entire viewport
    const dataUrl = canvas.toDataURL("image/png"); // Convert to data URL
    setScreenshot(dataUrl); // Set the screenshot state
    console.log("Screenshot taken!"); // Log to console
  };

  return (
    <>
      <motion.div
        className={`flex flex-col poppins transition-all max-w-[1500px] h-full p-[30px] px-[250px] gap-[10px] ${
          global.showSidebar ? "px-[250px]" : ""
        }`}
      >
        <Navbar />
        <ComponentWrapper
          title="Hero"
          description="Fancy button with a shimmer affect using conic gradient"
          libraries={["React", "Tailwind", "Framer-motion"]}
        >
          hi
        </ComponentWrapper>
        <button onClick={takePhoto} className="fixed bottom-5 left-5">
          Take photo
        </button>
      </motion.div>
      {screenshot && ( // Overlay the screenshot if it exists
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `url(${screenshot})`,
            backgroundSize: "cover",
            zIndex: 9999,
            pointerEvents: "none", // Allow clicks to pass through
          }}
        />
      )}
    </>
  );
}
