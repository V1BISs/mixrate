import { FaFire } from "react-icons/fa";
import TabaccoCard from "./TabaccoCard";
import { TabaccoList } from "./TabaccoList";
import { FilterTab } from "./FilterTab";

function App() {

  return (
    <div className="w-screen mx-40 my-20">
      <div className="bg-gray-900 border-2 border-blue-500 rounded-lg w-[80%]">
        <h1 className="text-3xl font-bold my-8 text-purple-400 flex justify-start ml-18">
          В ТРЕНДЕ! <FaFire className="text-purple-400" />
        </h1>

        <FilterTab />
        
        <TabaccoList />
      </div>
    </div>
  );
}

export default App;
