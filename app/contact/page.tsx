"use client";

export default function contact() {
    return (
        <main className="min-h-screen bg-black text-white px-8 py-16">

            <h1 className="text-5xl font-bold text-[#00f600] text-center">
                CONTACT US
            </h1>

            <p className="text-center text-gray-400 mt-4">
                Have a question? Let's build something together.
            </p>

            <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-12">

                <div className="flex flex-col justify-center">

                    <h2 className="text-3xl font-bold">
                        GET IN TOUCH
                    </h2>

                    <p className="text-gray-400 mt-4 leading-7">
                        Whether you want to join the club, collaborate with us,
                        participate in an event, or simply know more about
                        Android Club, we'd love to hear from you.
                    </p>

                    <div className="mt-8 space-y-5">

                        <div>
                            <p className="text-[#00f600] font-semibold">
                                EMAIL
                            </p>
                            <p className="text-gray-300 mt-1">
                                androidclub@vit.ac.in
                            </p>
                        </div>

                        <div>
                            <p className="text-[#00f600] font-semibold">
                                LOCATION
                            </p>
                            <p className="text-gray-300 mt-1">
                                VIT Chennai
                            </p>
                        </div>

                        <div>
                            <p className="text-[#00f600] font-semibold">
                                SOCIALS
                            </p>
                            <p className="text-gray-300 mt-1">
                                Instagram · LinkedIn · GitHub
                            </p>
                        </div>

                    </div>

                </div>


                <form className="border border-gray-800 bg-[#0a0a0a] rounded-2xl p-8">

                    <label className="block text-gray-300 mb-2">
                        Name
                    </label>

                    <input
                        type="text"
                        placeholder="Your name"
                        className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 outline-none focus:border-[#00f600]"
                    />


                    <label className="block text-gray-300 mt-6 mb-2">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 outline-none focus:border-[#00f600]"
                    />


                    <label className="block text-gray-300 mt-6 mb-2">
                        Message
                    </label>

                    <textarea
                        rows={5}
                        placeholder="Tell us what's on your mind..."
                        className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 outline-none focus:border-[#00f600] resize-none"
                    />


                    <button
                        type="submit"
                        className="w-full mt-6 bg-[#00f600] text-black font-bold py-3 rounded-lg hover:shadow-[0_0_25px_#00f600] transition"
                    >
                        SEND MESSAGE
                    </button>

                </form>

            </div>

        </main>
    );
}