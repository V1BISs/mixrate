const TabaccoCard = ({ tabacco }) => {
  return (
    <div className="flex w-[calc(90%-2px)] border-2 rounded-xl border-blue-500 p-5 mb-10 mx-auto transition-transform duration-300 hover:scale-105 cursor-pointer">
      <div className="flex ml-5 mr-10">
        <div className="text-5xl font-black text-blue-500 mr-5 flex items-center">
          {tabacco.id}.
        </div>
        <img
          className="w-32 h-32 rounded-lg "
          src={tabacco.image}
          alt={tabacco.tabbacoName}
        />
      </div>

      <div className="flex">
        <div className="mr-20 pt-4">
          <div className="text-xl font-black mb-1 text-blue-500">{tabacco.tabbacoName}</div>
          <div className="text-base font-medium mb-1">{tabacco.flavor}</div>
          <div className="text-xl font-black mb-1">{tabacco.company}</div>
        </div>
        <div className="pt-4">
          <div className="text-base font-medium mb-1">Линейка: {tabacco.line}</div>
          <div className="text-base font-medium mb-1">Крепость: {tabacco.strength}</div>
        </div>
      </div>
    </div>
  );
};

export default TabaccoCard;
