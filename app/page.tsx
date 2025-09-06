import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="relative flex justify-center items-center 
      h-screen flex-col overflow-hidden mx-auto sm:px-10 px-5"
    >
      <div className="w-full max-w-7xl">
        <Hero />
      </div>
    </main>
  );
}
