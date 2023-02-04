import { useState } from "react";
import BuySellButton from "./BuySellButton";
import Header from "./Header"
import DisplayGraph from "./displayGraph";

function WebApp() {
    const [data, setData] = useState([
        { name: 'Jan', value: 30 },
        { name: 'Feb', value: 10 },
        { name: 'Mar', value: 50 },
        { name: 'Apr', value: 20 },
        { name: 'May', value: 80 },
        { name: 'Jun', value: 30 },
        { name: 'July', value: 0 },
        { name: 'Aug', value: 20 },
        { name: 'Sep', value: 300 },
        { name: 'Oct', value: 55 },
        { name: 'Nov', value: 60 },
        { name: 'Dec', value: 80 },
      ])
    return (
        <div className="web-app-container">
            <div className="header">
                <Header />
            </div>
            <div className="graph-container">
                <DisplayGraph data ={data} />
            </div>
            <div className="buy-sell-container">
                <BuySellButton data={data} setData={setData}/>
            </div>
            
        </div>
    )
}

export default WebApp