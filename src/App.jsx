import TabaccoCard from "./TabaccoCard";
import { TabaccoList } from "./TabaccoList";

function App() {
  return (
    <div className="w-200 m-20 ml-120">
      <div className="bg-gray-900 border-2 border-blue-500 rounded-lg">
        <h1 className="text-3xl font-bold text-center py-4 text-blue-400">
          В тренде! 🔥
        </h1>
        <TabaccoList />
      </div>
    </div>
  );
}

export default App;
