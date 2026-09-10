"use client";

import {useEffect, useState} from "react";
type Repository= {
    id:number;
    name: string;
    description: string;
    html_url: string;
    language: string;
    
};
const exhibits= [
            {
            year: 2026,
            title: "Android Workshop",
            date: "15 August, 2026",
            description: "Master the art of mobile app development in our hands-on Android Workshop! Designed specifically for beginners, this session will take you from setting up Android Studio to building and deploying your very first live mobile application. You will learn the fundamentals of modern UI design, handle user inputs, and understand how to bring your app ideas to life using industry-standard tools. No prior app development experience required—just bring your laptop and your curiosity!",
            image: "/archive/sample_workshop.jpg",
        },

        {
            year: 2025,
            title: "Android Hackathon",
            date: "15 August, 2026",
            description: "An exhilarating Android Hackathon where innovation meets creativity! This event is designed for developers of all skill levels to come together and build amazing Android applications in a collaborative environment. Participants will have the opportunity to showcase their coding skills, learn from industry experts, and compete for exciting prizes. Whether you're a seasoned developer or just starting out, this hackathon promises to be an unforgettable experience filled with learning, networking, and fun!",
            image: "/archive/sample_hackathon.jpg",
        },

        {
            year: 2024,
            title: "Android gaming workshop",
            date: "15 August, 2026",
            description: "Dived into the world of mobile game development with our Android Gaming Workshop! This hands-on session is perfect for beginners and enthusiasts eager to learn how to create engaging and interactive games for Android devices. Participants will explore game design principles, learn to implement touch controls, and discover how to bring their game ideas to life using Android Studio. No prior experience is necessary—just bring your laptop and your imagination!",
            image: "/archive/gaming_sample.jpg",
        },

        {
            year: 2023,
            title: "Android Project Exhibition",
            date: "15 August, 2026",
            description: "Showcased Android development skills in our annual project exhibition! This event is a great opportunity for developers to present their innovative projects and receive feedback from peers and industry experts. Whether you're a seasoned developer or just starting out, this exhibition promises to be an exciting showcase of creativity and technical prowess.",
            image: "/archive/sample_exhibition.jpg",
        },
        ];

export default function Archive() {
    const[repositories, setRepositories]= useState<Repository[]>([]);
    useEffect(()=> {
        fetch( "https://api.github.com/orgs/Android-club-VITC/repos")
        .then((response)=> response.json())
        .then((data)=> setRepositories(data));
    }, []);
    
    return (
        
        <main className="min-h-screen bg-black text-white px-8 py-16">
            <h1 className="text-5xl font-bold text-[#00f600] text-center">
                ARCHIVE
            </h1>

            <p className="text-center text-gray-400 mt-4">
                A look back at our journey
            </p>

            <div className= "relative mt-24 max-w-6xl mx-auto">
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-800 -translate-x-1/2">
                    <div className="absolute inset-0 bg-[#00f600] opacity-40 blur-sm" />
                </div>

                <div className= "space-y-32">
                {exhibits.map((exhibit, index)=>(
                    <div 
                key= {` ${exhibit.title}- ${index}`}
            className= {`relative flex ${
                index%2===0? "justify-start" :"justify-end "
                }`}
                >
        
            <div className="absolute left-1/2 top-8 -translate-x-1/2 w-5 h-5 rounded-full bg-[#00f600] shadow-[0_0_20px_#00f600] z-10" />

                <div className="group relative w-[45%] h-[600px] overflow-hidden rounded-2xl border border-gray-800 bg-[#0a0a0a]">
            <img src={exhibit.image} alt={exhibit.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-8">
            
            <p className= "text-[#00f600] text-6xl font-bold">
                {exhibit.year}
                </p>
                <h2 className= "text-3xl font bold mt-3">
                    {exhibit.title}
                </h2>
                <p className= "text-gray-400 mt-3">
                    {exhibit.date}
                </p>

                <p className="text-gray-300 mt-6 max-w-md">
                    {exhibit.description}
                </p>
                    </div>
            </div>
            </div>
            
                ))}
        </div>
        </div>

    <section className="mt-20 px-8">
  <h2 className="text-4xl font-bold text-[#00f600] text-center">
    GITHUB PROJECTS
  </h2>
    <p className="text-center text-gray-400 mt-4">
        To demonstrate public API</p>

  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {repositories.map((repo) => (
      <div
        key={repo.id}
        className="rounded-2xl border border-gray-800 bg-[#0a0a0a] p-6 transition-all hover:scale-105 hover:border-[#00f600]"
      >
        <h3 className="text-2xl font-bold">
          {repo.name}
        </h3>

        <p className="mt-3 text-gray-400">
          {repo.description || "No description available."}
        </p>

        <p className="mt-4 text-[#00f600]">
          {repo.language || "Various"}
        </p>

        

        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 text-[#00f600]  hover:border hover:border-[#00f600]">
          View on GitHub
        </a>
      </div>
    ))}
  </div>
</section>

        </main>
    );

}