import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Hero from "./Hero/Hero";

export default function Home() {
  return (
    <>
      <div className="flex flex-col max-w-[1500px] h-full ">
        <Sidebar />
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
