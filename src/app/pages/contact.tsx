import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="text-xl">Feel free to reach out via email at:</p>
      <a href="mailto:your-email@example.com" className="text-blue-500 hover:underline">
        your-email@example.com
      </a>
    </div>
  );
};

export default Contact;
