'use client'

import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
    const [fromName, setFromName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef<HTMLFormElement | null>(null);
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    const [feedback, setFeedback] = useState('Thanks for reaching me, please fill the form below and I will get back to you as soon as possible.');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(form.current);
        
        setIsLoading(true);
        
        emailjs.sendForm(
            'SchoolMail',
            'template_l219ahi', 
            form.current!,
            userId
        )
        .then((response) => {
             console.log('SUCCESS!', response.status, response.text);
             setFromName('');
             setEmail('');
             setMessage('');
             setFeedback('Your message has been sent successfully!');
        }, (err) => {
             console.log('FAILED...', err);
             setFeedback('Failed to send your message. Please try again later.');
        })
        .finally(() => {
             setIsLoading(false); // Set loading state back to false
        });
    };

    return (
        <main className="flex flex-col   h-screen w-screen text-inherit place-items-center justify-center text-center p-0">
            <h1 className='text-4xl'>Contact Me</h1>
            <div id="form and prompt" className='flex flex-col justify-center items-center py-32 md:py-8  shadow-zinc-200'>
                <div className='border border-transparent rounded-lg p-10 w-2/3 mx-5 shadow-fours'>
                    {isLoading ? 'Sending email...' : feedback}<br/>
                </div>

                <form ref={form} onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6">
                    <div className="mb-4">
                        <label htmlFor="fromName" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                        <input
                            type="text"
                            id="fromName"
                            value={fromName}
                            onChange={(e) => setFromName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your message"
                            rows={4}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Sending...' : 'Send'}
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
