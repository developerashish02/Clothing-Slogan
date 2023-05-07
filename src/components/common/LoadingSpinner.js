import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <svg className="animate-spin h-5 w-5 text-gray-500" viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm1 18c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zM9.757 9.172c-.390-.39-1.023-.39-1.414 0-.39.39-.39 1.024 0 1.414L10.586 12l-2.243 2.414c-.39.39-.39 1.024 0 1.414.195.196.45.293.707.293s.512-.098.707-.293l2.828-2.828c.39-.39.39-1.023 0-1.414L9.757 9.172z"
                />
            </svg>
        </div>
    );
}

export default LoadingSpinner;
