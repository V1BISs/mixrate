import { TABACCO } from "./Tabacco.data"
import TabaccoCard from "./TabaccoCard"

export const TabaccoList = () => {
  return (
    <div className="">
        {TABACCO.map(tabacco => (
            <TabaccoCard key={`${tabacco.tabbacoName}-${tabacco.company}-${tabacco.flavor}`} tabacco={tabacco}/>
        ))}
    </div>
  )
}
