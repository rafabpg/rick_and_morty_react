import { Link } from 'react-router-dom';

export function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <h1 className="text-9xl font-bold text-red-500">404</h1>
            <p className="text-2xl text-gray-700 mt-4">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="mt-6 text-lg text-blue-500 hover:text-blue-700">
                Go Back Home
            </Link>
        </div>
    );
}
