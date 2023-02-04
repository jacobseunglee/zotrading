import { useState } from "react";
import BuySellButton from "./BuySellButton";
import Header from "./Header"

function WebApp() {
    return (
        <div className="web-app-container">
            <div className="header">
                <Header />
            </div>
            <div className="graph-container"></div>
            <div className="buy-sell-container">
                <BuySellButton />
            </div>
        </div>
    )
}

export default WebApp