import { useState, useEffect } from "react";
import PostFeed from "../Feed/PostFeed";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ChallengePosts = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null); // Начальное значение - null
  const { id } = useParams(); // Получаем id челленджа из параметров маршрута

  // Функция для получения данных
  const fetchData = async (challengeId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/challenge/${challengeId}/posts`);
      setData(response.data); // Устанавливаем данные
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  // Вызов fetchData при монтировании компонента или изменении id
  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  // Если данных нет или они пустые, перенаправляем на главную
  useEffect(() => {
    if (data === null) return; // Ждем загрузки данных
    if (data.length === 0) {
      console.log("Нет данных, перенаправление на главную");
      navigate(-1);
    }
  }, [data, navigate]);

  // Проверка перед рендерингом PostFeed
  if (data === null) {
    return (
      <div className="flex justify-center items-center h-screen animate-fade-in">
        <div className="text-center p-6 bg-yellow-100 text-yellow-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <svg
            className="mx-auto mb-4 h-12 w-12 text-yellow-500 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01M20.76 13.4a9 9 0 11-7.72-7.72m8.54 4.83A9 9 0 0112 21V12"
            />
          </svg>
          <p className="text-xl font-semibold">Посты, связанные с челленджем, не найдены</p>
          <p className="mt-2 text-yellow-600">Пожалуйста, попробуйте позже</p>
        </div>
      </div>
    );
  }
  

  return <PostFeed posts={data} />;
};

export default ChallengePosts;
