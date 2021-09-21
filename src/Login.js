import React from "react";
import BarGraph from "./BarGraph";
const Login = () => {
    return (<>
    <div className="align-row">
        <div className="firstWidth">
            <BarGraph barId={'bar1'}/>
        </div>
        <div className="firstWidth">
            <BarGraph barId={'bar2'}/>
        </div>
        <div className="firstWidth">
            <BarGraph barId={'bar3'}/>
        </div>
        </div>
        <div className="align-row">
        <div className="firstWidth">
            <BarGraph barId={'bar4'}/>
        </div>
        <div className="firstWidth">
            <BarGraph barId={'bar5'}/>
        </div>
        <div className="firstWidth">
            <BarGraph barId={'bar6'}/>
        </div>
        </div>
    </>)
}

export default Login;