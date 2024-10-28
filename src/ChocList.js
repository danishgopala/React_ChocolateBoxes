import ChocCard from "./ChocCard.js"
import chocolate from "./chocData.js";
const ChocList = () => {
    return (<div className="choc_container">
        {chocolate.map((choc, index)=>(
            <ChocCard key={index} choc={choc}/>
        ))}
    </div>)
}
export default ChocList;