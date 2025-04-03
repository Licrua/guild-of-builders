import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen w-full flex p-10 items-center justify-center bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Добро пожаловать на Главную страницу!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Нажмите кнопку, чтобы перейти в вашу панель управления.
        </p>
        <Link to="/user/dashboard">
          <button className="px-6 py-3 bg-blue-600 text-orange-50 text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
            Перейти в панель управления
          </button>
        </Link>
      </div>
    </div>
  );
}
