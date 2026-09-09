//import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import ColorBends from "@/components/ColorBends";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>

    
    
    

    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
  <ColorBends
    colors={["#00f600", "#003b00", "#000000"]}
    speed={0.2}
    rotation={90}
    mouseInfluence={1}
    parallax={0.5}
    noise={0.1}
  />
</div>
       <div className= "relative z-10 w-full h-96 flex items-center justify-center overflow-hidden">
    <img
    src="/TechAndroidGIFbyGoogleDevelopers-ezgif.com-remove-background.gif"
    alt="Running Android"
    className="w-[460px] h-auto -mt-18"
    />

    </div>
      <h2 className="relative z-10 text-4xl md:text-6xl text-center font-bold tracking-tight"> Empowering developers, enhancing the Android Community</h2>
      <p className="relative z-10 text-3xl text-[#00f600]">
        LEARN.  BUILD.  INNOVATE.
      </p>

      <button className="relative z-10mt-8 px-8 py-3 bg-[#00f600] text-black font-bold rounded-full hover:scale-105 hover:shadow-[0_0_30px_#00f600] transition-all duration-300">
  EXPLORE!
</button>
    </section>
    

    </main>
  );
}
