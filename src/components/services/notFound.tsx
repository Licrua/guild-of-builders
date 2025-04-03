import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-lg text-gray-700 mb-6">Страница не найдена</p>
        <Link to="/">
          <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
            Вернуться на главную
          </button>
        </Link>
      </div>
    </div>
  );
}
