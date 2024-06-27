import React from 'react';

export default function ContactUs() {
    const ownerEmail = 'Rentify@gmail.com';

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mb-8">
            <h2 className="text-2xl mb-4">Contact the Owner</h2>
            <p>If you have any questions or inquiries, you can reach out to the owner directly via email:</p>
            <a 
                href={`mailto:${ownerEmail}`} 
                className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
                Send Email
            </a>
        </div>
    );
}

