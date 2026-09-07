"use client";
import {useState} from "react";
type Event = {
  title: string;
  date: string;
  venue: string;
  description: string;
  image: string;
};
const events=[
    {
    title: "Android Workshop",
    date: "13 September, 2026",
    venue: "Kasturba Auditorium",
    description: "Master the art of mobile app development in our hands-on Android Workshop! Designed specifically for beginners, this session will take you from setting up Android Studio to building and deploying your very first live mobile application. You will learn the fundamentals of modern UI design, handle user inputs, and understand how to bring your app ideas to life using industry-standard tools. No prior app development experience required—just bring your laptop and your curiosity!",
    image: "/events/sampleandroid_workshop.jpg",
    registration: "https://forms.google.com/",
},
{
    title: "Build a game",
    date: "14 October, 2026",
    venue: "MG Auditorium",
    description: "Build and deploy your very first mobile game in our hands-on Android Gaming Workshop! Designed for beginners, this session will guide you through the core mechanics of mobile game development using Android Studio and modern frameworks. You will learn to handle touch controls, implement basic physics, animate sprites, and manage score systems. No prior game dev experience required—just bring your laptop and your ideas!",

    image: "/events/sample_buildagame.jpg",
    registration: "https://forms.google.com/",
},
{   
    title: "Tech Talk",
    date: "15 November, 2026",
    venue: "AB1-203",
    description: "Master the art of mobile app development in our hands-on Android Workshop! Designed specifically for beginners, this session will take you from setting up Android Studio to building and deploying your very first live mobile application. You will learn the fundamentals of modern UI design, handle user inputs, and understand how to bring your app ideas to life using industry-standard tools. No prior app development experience required—just bring your laptop and your curiosity!",
    image: "/events/techtalk_sample.jpg",
    registration: "https://forms.google.com/",
},

];

export default function Events(){
    const[selectedEvent, setSelectedEvent]= useState<Event | null>(null);
    return(
        <main className= "min-h-screen bg-black text-white px-8 py-16">
            <h1 className= "text-5xl font-bold text-[#00f600] text-center">
                UPCOMING EVENTS
            </h1>
            <div className= "mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {events.map((event)=>(
                    <div
                    key={event.title}
                onClick={()=> setSelectedEvent(event)}
            className="cursor-pointer overflow-hidden rounded-2xl border border-gray-800 transition-all
            duration-300 hover:scale-105 hover:shadow-[0_0_30px_#00f600]"
            >
                
                

                <img
                src={event.image}
                alt={event.title}
                className="w-full h-[450px] object-contain"
                />
                </div>
            ))}
            </div>
            {selectedEvent&& (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-6">
                    <div className=" bg-[#0a0a0a] border border-[#00f600] rounded-2xl max-w-lg w-full p-8">
                        <h2 className= "text-3xl font-bold text-[#00f600]">
                            {selectedEvent.title}
                            </h2>
                            <p className="mt-4">
                                {selectedEvent.date}
                            </p>

                            <p className="mt-2">
                                {selectedEvent.venue}
                            </p>

                            <p className="mt-6 text-gray-400">
                                {selectedEvent.description}
                            </p>

                            <a
                            href={selectedEvent.registration}
                            target="_blank"
                             rel="noopener noreferrer"
                            className="mt-8 inline-block px-6 py-3 bg-[#00f600] text-black font-bold rounded-full hover:scale-105 transition-transform"
                            >
                            REGISTER NOW
                            </a>

                            <button
                            onClick={()=>setSelectedEvent(null)}
                        className="mt-8 px-6 py-3 bg-[#00f600] text-black font-bold rounded-full"
                    >
                        CLOSE
                        </button>


                        
                        </div>
                </div>
    )}
        </main>
    );
}