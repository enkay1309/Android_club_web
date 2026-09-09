//import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import ColorBends from "@/components/ColorBends";
import Link from "next/link";

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
    colors={["#147414ff", "#003b00", "#000000"]}
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

      <a href="#explore"
       className="relative z-10mt-8 px-8 py-3 bg-[#00f600] text-black font-bold rounded-full hover:scale-105 hover:shadow-[0_0_30px_#00f600] transition-all duration-300">
  EXPLORE!
</a>
    </section>
    <section
  id="explore"
  className="min-h-screen bg-black text-white px-8 py-24 flex flex-col items-center justify-center"
>
  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00f600] text-center">
    Explore the Android Club
  </h2>

  <p className="text-gray-400 text-center max-w-2xl mb-12">
    We build, experiment, and learn together by turning ideas into
    real world Android experiences.
  </p>

  <div
   className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full">

    <Link href="/events" className="border border-gray-800 rounded-2xl p-8 bg-gray-950 hover:border-gray-600 transition">
     

      <h3 className="text-2xl text-[#00f600] font-bold mb-3">
        Events
      </h3>

      <p className="text-gray-400 ">
        Participate in workshops, hackathons, and tech talks to enhance
      </p>
    </Link>


    <Link href="/members" className="border border-gray-800 rounded-2xl p-8 bg-gray-950 hover:border-gray-600 transition">
      

      <h3 className="text-2xl text-[#00f600] font-bold mb-3">
        Members
      </h3>

      <p className="text-gray-400">
        Join a community of passionate developers, designers, and
      </p>
    </Link>


    <Link href="/archive" className="border border-gray-800 rounded-2xl p-8 bg-gray-950 hover:border-gray-600 transition">
      

      <h3 className="text-2xl text-[#00f600] font-bold mb-3">
        Archive
      </h3>

      <p className="text-gray-400">
        Explore our past projects, events, and achievements that showcase
      </p>
    </Link>


    <Link href="/contact" className="border border-gray-800 rounded-2xl p-8 bg-gray-950 hover:border-gray-600 transition">
      

      <h3 className="text-2xl text-[#00f600] font-bold mb-3">
        Contact Us
      </h3>

      <p className="text-gray-400">
        Reach out to us for collaborations, inquiries, or to join our
        </p>
    </Link>

  </div>
</section>

    </main>
  );
}
