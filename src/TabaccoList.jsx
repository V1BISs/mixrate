import { TABACCO } from "./Tabacco.data";
import TabaccoCard from "./TabaccoCard";

export const TabaccoList = () => {
  const sortedTobacco = [...TABACCO].sort((a, b) => b.rating - a.rating);
  return (
    <div className="">
      {sortedTobacco.map((tabacco, index) => (
        <TabaccoCard
          key={`${tabacco.tabbacoName}-${tabacco.company}-${tabacco.flavor}`}
          tabacco={tabacco}
          itemNumber={index + 1}
        />
      ))}
    </div>
  );
};
