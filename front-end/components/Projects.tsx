export default function Projects() {
    return(
        <section id="projects" className="py-24 px-8 md:px-20 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                        Featured <span className="text-sky-500"> Projects</span>
                    </h1>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Here are some of my projects. More coming soon!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-start">
                    <div className="bg-gray-100 rounded-2xl w-full shadow-md overflow-hidden hover:shadow-xl transition">
                        <div className="h-56 w-full bg-gray-300"></div>
                        <div className="p-6 space-y-3">
                            <h2 className="text-xl font-semibold text-gray-800">Project Title</h2>
                            <p className="text-gray-600 text-sm">Description of the project.</p>

                            <div className="flex gap-2 text-xs text-gray-500">
                                <span className="bg-gray-200 px-2 py-1 rounded">JavaScript</span>
                                <span className="bg-gray-200 px-2 py-1 rounded">HTML</span>
                                <span className="bg-gray-200 px-2 py-1 rounded">CSS</span>
                            </div>
                        </div>
                    </div>
                
                    <div className="bg-gray-100 rounded-2xl w-full shadow-md overflow-hidden hover:shadow-xl transition">
                        <div className="h-56 w-full bg-gray-300"></div>
                        <div className="p-6 space-y-3">
                            <h2 className="text-xl font-semibold text-gray-800">Project Title</h2>
                            <p className="text-gray-600 text-sm">Description of the project.</p>

                            <div className="flex gap-2 text-xs text-gray-500">
                                <span className="bg-gray-200 px-2 py-1 rounded">React</span>
                                <span className="bg-gray-200 px-2 py-1 rounded">TailwindCSS</span>
                                <span className="bg-gray-200 px-2 py-1 rounded">Next.js</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}