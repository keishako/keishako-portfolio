"use client";

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [success, setSuccess] =useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

    const response = await fetch("https://formspree.io/f/xojydgal", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(formData),
    });

    if(response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: ""});
    } else {
        alert("Something went wrong.");
    }
};

    return (
        <section id="contact" className="py-24 px-8 md:px-20 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                    Contact <span className="text-sky-500">Me</span>
                </h1>
                <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                    Feel free to reach out if you want to collaborate, ask questions,
                    or just connect with me!
                </p>

                <div className="space-y-4 text-lg text-gray-800">
                    <p>
                        Email: {" "}
                        <a
                        href="mailto:keisha_ko@dlsu.edu.ph"
                        className="text-sky-500 hover:underline">
                            keisha_ko@dlsu.edu.ph
                        </a>
                    </p>

                    <p>
                        GitHub: {" "}
                        <a
                        href="https://github.com/keishako"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-500 hover:underline">
                            https://github.com/keishako
                        </a>
                    </p>

                    <p>
                        LinkedIn: {" "}
                        <a
                        href="https://www.linkedin.com/in/keishako/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-500 hover:underline">
                            https://www.linkedin.com/in/keishako/
                        </a>
                    </p>
                </div>

                <div className="bg-white rounded-2xl max-w-2xl w-full shadow-md p-8 mx-auto mt-10">
                    <h2 className="text-3xl font-bold text-center mb-6 text-black">
                        Send Me a Message
                    </h2>

                    <form 
                        onSubmit={handleSubmit}
                        className="space-y-4 text-black">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border p-3 rounded-lg"/>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border p-3 rounded-lg"/>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full border p-3 rounded-lg h-32"/>
                        <button
                            type="submit"
                            className="w-full bg-sky-500 text-white py-3 rounded-lg hover:bg-sky-600 transition">
                            Send Message
                        </button>
                    </form>

                    {success && (
                        <p className="text-green-600 mt-4 text-center">
                            Message sent!
                        </p>
                    )}

                </div>
            </div>
        </section>
    );
}