import { TABACCO } from "./Tabacco.data"
import TabaccoCard from "./TabaccoCard"

export const TabaccoList = () => {
  return (
    <div className="">
        {TABACCO.map(tabacco => (
            <TabaccoCard key={tabacco.id} tabacco={tabacco}/>
        ))}
    </div>
  )
}
