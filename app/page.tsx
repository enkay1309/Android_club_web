//import Image from "next/image";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>

    <nav className= "flex items-center justify-between px-8 py-4 bg-black text-white border-b border-gray-800 ">

    
    <h1 className="font-[var(--font-space-grotesk)] text-5xl font-bold text-center text-[#00f600]">
    ANDROID CLUB
    </h1>

    <div className= "flex gap-8">
      <a className="hover:text-[#00f600]" href= "/">Home</a>
      <a className="hover:text-[#00f600]" href="/events"> Events</a>
      <a className="hover:text-[#00f600]" href= "/members"> Members</a>
      <a className="hover:text-[#00f600]" href="/archive"> Archive</a>
      <a className="hover:text-[#00f600]" href= "/contact"> Contact</a>
    </div>

    </nav>
    
    

    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black via-black to-[#052c05]">

       <div className= "relative w-full h-96 flex items-center justify-center overflow-hidden">
    <img
    src="/TechAndroidGIFbyGoogleDevelopers-ezgif.com-remove-background.gif"
    alt="Running Android"
    className="w-[460px] h-auto -mt-18"
    />

    </div>
      <h2 className=" text-4xl md:text-6xl text-center font-bold tracking-tight"> Empowering developers, enhancing the Android Community</h2>
      <p className="text-3xl text-[#00f600]">
        LEARN.  BUILD.  INNOVATE.
      </p>

      <button className="mt-8 px-8 py-3 bg-[#00f600] text-black font-bold rounded-full hover:scale-105 hover:shadow-[0_0_30px_#00f600] transition-all duration-300">
  EXPLORE!
</button>
    </section>
    

    </main>
  );
}
