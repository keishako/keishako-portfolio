import Link from "next/link";

const posts =[
    {
        date: "April 2026",
        title: "What I’m Learning as a Computer Science Student",
        content:
        "Sharing my experiences, struggles, and progress as I continue learning and improving.",
    },
    {
        date: "April 2026",
        title: "Small Progress Still Counts",
        content:
        "A reminder to myself that even small improvements matter when learning something new.",
    },
];

export default function BlogPage() {
    return (
        <main className="py-24 px-8 md:px-20 bg-white min-h-screen">
            <div className="max-w-5xl mx-auto">
                <div className="mb-8 animate-bounce text-black">
                    <Link href="/" className="hover:underline">
                        ← Back to Home
                    </Link>
                </div>
                
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black">
                        Keisha's <span className="text-sky-500">Blog</span>
                    </h1>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Thoughts, reflections, and things I’m learning in tech.
                    </p>
                </div>

                <div className="space-y-8">
                    {posts.map((post, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 rounded-2xl shadow-md p-8 hover:shadow-xl transition">
                        <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">{post.title}</h2>
                        <p className="text-gray-600 leading-relaxed">{post.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}