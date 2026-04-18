import Link from "next/link";

export default function Blog() {
    return (
        <section id="blog" className="py-24 px-8 md:px-20 bg-gray-100">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        My <span className="text-sky-500">Blog</span>
                    </h1>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Thoughts, reflections, and things I’m learning in tech.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-stretch">
                    <div className="bg-white rounded-2xl w-full shadow-md p-8 hover:shadow-xl transition">
                        <p className="text-sm text-gray-400 mb-2">April 2026</p>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                            What I’m Learning as a Computer Science Student
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Sharing my experiences, struggles, and progress as I continue learning and improving.
                        </p>
                        <Link href="/blog" className="text-sky-500 font-medium hover:underline">
                            Read More →
                        </Link>
                    </div>

                    <div className="bg-white rounded-2xl w-full shadow-md p-8 hover:shadow-xl transition">
                        <p className="text-sm text-gray-400 mb-2">April 2026</p>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                            Small Progress Still Counts
                        </h3>
                        <p className="text-gray-600 mb-4">
                            A reminder to myself that even small improvements matter when learning something new.
                        </p>
                        <Link href="/blog" className="text-sky-500 font-medium hover:underline">
                            Read More →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
