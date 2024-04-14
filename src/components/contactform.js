import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_41chrtb', 'template_w27dvms', form.current, {
                publicKey: 'OScPdEwZ5PLl2jBg3',
            })
            .then(
                () => {
                    // console.log('SUCCESS!');
                    setMessageSent(true); // Update state when email is sent successfully
                    setTimeout(() => {
                        setMessageSent(false); // Reset messageSent state after a few seconds
                    }, 10000); // Change 3000 to the desired number of milliseconds (e.g., 3000 = 3 seconds)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };

    return (
        <div className="max-w-md flex flex-col mx-auto">
            <form ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input type="text" id="name" name="user_name" placeholder="Enter your name" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input type="email" id="email" name="user_email" placeholder="Enter your email address" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea id="message" name="message" rows="4" placeholder="Enter your message" className="w-full border border-gray-300 rounded-md px-3 py-2"></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600">Send Message</button>
                </div>
            </form>
            {messageSent && (
                <div className="fixed top-10 right-4 transform -translate-y-1/2 bg-white border border-gray-300 rounded-md p-4 shadow-md">
                    <p className="text-green-600">Message has been sent!</p>
                </div>
            )}
        </div>
    );
};

export default ContactForm