import React, { useState } from "react";

export const FilterTab = () => {
  const [activeTab, setActiveTab] = useState("вкусы");
  return (
    <div className="mx-18 my-5">
      <button
        className={`mr-5 relative px-1 pb-2 transition-colors group ${
          activeTab === "вкусы"
            ? "text-white"
            : "text-gray-400 hover:text-white"
        }`}
        onClick={() => setActiveTab("вкусы")}
      >
        Вкусы
        <span
          className={`absolute bottom-0 left-0 w-full h-0.5 transition-transform origin-left ${
            activeTab === "вкусы"
              ? "bg-purple-500 scale-x-100"
              : "bg-gray-500 scale-x-0 group-hover:scale-x-100"
          }`}
        ></span>
      </button>

      <button
        className={`mr-5 relative px-1 pb-2 transition-colors group ${
          activeTab === "бренды"
            ? "text-white"
            : "text-gray-400 hover:text-white"
        }`}
        onClick={() => setActiveTab("бренды")}
      >
        Бренды
        <span
          className={`absolute bottom-0 left-0 w-full h-0.5 transition-transform origin-left ${
            activeTab === "бренды"
              ? "bg-purple-500 scale-x-100"
              : "bg-gray-500 scale-x-0 group-hover:scale-x-100"
          }`}
        ></span>
      </button>

      <button
        className={`mr-5 relative px-1 pb-2 transition-colors group ${
          activeTab === "линейки"
            ? "text-white"
            : "text-gray-400 hover:text-white"
        }`}
        onClick={() => setActiveTab("линейки")}
      >
        Линейки
        <span
          className={`absolute bottom-0 left-0 w-full h-0.5 transition-transform origin-left ${
            activeTab === "линейки"
              ? "bg-purple-500 scale-x-100"
              : "bg-gray-500 scale-x-0 group-hover:scale-x-100"
          }`}
        ></span>
      </button>
    </div>
  );
};
