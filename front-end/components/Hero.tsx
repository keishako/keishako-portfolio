export default function Hero() {
    return <section 
    id="home" 
    className="min-h-screen flex items-center px-8 md:px-20 pt-15 pb-16 relative bg-white"
    >
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center gap-6">
        <div className="space-y-6 text-center">
            <h1 className="text-black text-5xl md:text-6xl font-bold tracking-tight">
                <span className="inline-block opacity-0 animate-fade-in">
                    Hi, I'm
                </span>{" "}
                <span className="inline-block opacity-0 animate-fade-in-delay-1">
                    Keisha
                </span>{""}
                <span className="inline-block text-sky-500 ml-2 opacity-0 animate-fade-in-delay-2">
                    Ko
                </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                A Computer Science student majoring in Software Technology at De La Salle University,
                working toward becoming a software developer.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                <a 
                href="#projects"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
                >
                View My Work
                </a>
            </div>
        </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-base text-black"> Scroll</span>
            <span className="text-base animated-bounce text-black">↓</span>
        </div>

    </section>

}