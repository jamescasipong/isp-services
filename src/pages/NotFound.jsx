import React from 'react';

const NotFound = () => {
    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <h2 className="mt-4 text-2xl font-semibold text-gray-700">Page Not Found</h2>
                <p className="mt-2 text-gray-600">Sorry, the page you are looking for does not exist.</p>
                <div className="mt-6">
                    <a 
                        href="/" 
                        className="inline-block px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                    >
                        Go to Homepage
                    </a>
                </div>
                {/*<div className="mt-4">
                    <p className="text-sm text-gray-500">Or try searching for what you need:</p>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="mt-2 p-2 border rounded-md w-full max-w-xs mx-auto"
                    />
                </div>*/}
            </div>
        </div>
    );
};

export default NotFound;
