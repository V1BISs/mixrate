import { FaComment, FaEye, FaRegStar, FaStar } from "react-icons/fa";

const ProductStats = ({ rating, grade, review, view }) => {
  return (
    <div className="flex">
      <div className="relative group">
        <div className="border-2 rounded-lg border-purple-700 py-5 my-2 mx-2 w-25 h-25 grid justify-center">
          <FaStar className="text-purple-700 text-3xl m-auto" />
          <h2 className="font-bold text-xl text-white text-center">{rating}</h2>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
            Рейтинг
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
      </div>

      <div className="relative group">
        <div className="border-2 rounded-lg border-white py-5 my-2 mx-2 w-25 h-25 grid justify-center">
          <FaRegStar className="text-white text-3xl m-auto" />
          <h2 className="font-bold text-xl text-white text-center">{grade}</h2>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
            Оценки
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
      </div>

      <div className="relative group">
        <div className="border-2 rounded-lg border-white py-5 my-2 mx-2 w-25 h-25 grid justify-center">
          <FaComment className="text-white text-3xl m-auto" />
          <h2 className="font-bold text-xl text-white text-center">{review}</h2>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
            Коментарии
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
      </div>

      <div className="relative group">
        <div className="border-2 rounded-lg border-white py-5 my-2 mx-2 w-25 h-25 grid justify-center">
          <FaEye className="text-white text-3xl m-auto" />
          <h2 className="font-bold text-xl text-white text-center">{view}</h2>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
            Просмотры
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductStats;
