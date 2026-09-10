"use client";
//using mongodb database
import {useEffect, useState} from "react";


export default function Members(){
    //here
    const [members, setMembers]= useState<any []> ([]);
    useEffect(()=> {
        fetch("/api/members")
        .then((response)=> response.json())
        .then((data) => setMembers(data));

    }, []);
    //to here changes

    return(
        <main className= "min-h-screen bg-black text-white px-8 py-16 overflow-hidden">
            <h1 className= "text-5xl font-bold text-[#00f600] text-center">
                OUR TEAM
            </h1>

            <p className= "text-center text-gray-400 mt-4">
                Meet the people behind the scenes
            </p>
            <div className="mt-16 overflow-hidden">
            <div className= "flex w-max animate-scroll gap-8">
                {[...members, ...members].map((member, index)=>(
                    <div 
                        key={`${member.name}-${index}`}
                        className= "w-[280px] flex-shrink-0 overflow-hidden rounded-4xl border border-gray-800 bg-[#0a0a0a] transition-all hover:scale-105 hover:border-[#00f600] hover:shadow-[0_0_30px_#00f600]"
                        >
                        <img src={member.image} alt={member.name} className="w-full h-[320px] object-cover"
                        />

                        <div className="p-5 text-center">
                            <h2 className= "text-xl font-bold">
                                {member.name}
                            </h2>

                            <p className="mt-2 text-[#00f600]">
                                {member.position}
                            </p>
                        </div>
                        </div>
                ))}
            </div>
            </div>
        </main>
    );
}