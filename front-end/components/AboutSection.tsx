export default function AboutSection() {
    return (
    <section id="about" className="py-24 px-4 bg-gray-100">
    
    <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                About <span className="text-sky-500"> Me</span>
            </h1>

            <p className= "max-w-2xl mx-auto text-gray-800 text-lg leading-relaxed">
                I am a Computer Science student majoring in Software Technology. I enjoy learning new things 
                and figuring them out as I go. I like working on projects that push me to learn and help me grow, 
                both in my skills and in how I approach problems.
                <br /><br />
                I also enjoy working with other people, and I value communication and teamwork when working toward 
                shared goals. Recently, I’ve been exploring new concepts and focusing on working on getting better 
                one step at a time.
            </p>
        </div>

        <div>
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-10 text-black">
                Skills & Experiences
            </h2>

        <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white rounded-3xl shadow-md p-8">
                <h3 className="text-2xl font-semibold mb-6 text-sky-500">Skills</h3>
            <div className="space-y-5">
                <div>
                    <p className="mb-1 font-medium text-black">C</p>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-sky-500 h-3 rounded-full w-[20%]"></div>
                    </div>
                </div>

                <div>
                    <p className="mb-1 font-medium text-black">HTML</p>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-sky-500 h-3 rounded-full w-[10%]"></div>
                    </div>
                </div>

                <div>
                    <p className="mb-1 font-medium text-black">CSS</p>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-sky-500 h-3 rounded-full w-[10%]"></div>
                    </div>
                </div>

                <div>
                    <p className="mb-1 font-medium text-black">Figma</p>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-sky-500 h-3 rounded-full w-[10%]"></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-6 text-sky-500">Experience</h3>
            
            <div className="space-y-8">
            <div className="flex gap-6">
                <div className="w-20 text-sky-600 font-semibold">
                    2026
                </div>
                
                <div>
                    <p className="font-semibold text-gray-900">
                        Assistant Tream Leader, Logistics
                    </p>
                    <p className="text-gray-500 text-sm">
                        Technology Summit 2026 Central Committee
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                        De La Salle University
                    </p>
                </div>
            </div>
            <div className="flex gap-6">
                <div className="w-20 text-sky-600 font-semibold">
                    2025
                </div>

                <div>
                    <p className="font-semibold text-gray-900">
                        Junior Officer Trainee
                    </p>
                    <p className="text-gray-500 text-sm">
                        La Salle Computer Society (LSCS)
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                        De La Salle University
                    </p>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    </div>
    </section>
    );
}