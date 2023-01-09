import React from "react";
import './MainComponent.css';
import RightDiv from "../CV/RightDiv";
import Footer from "./Footer";
import LeftDiv from "./LeftDiv";
function MainComponent(){
    return(
        <>
        <div className="flex flex-row justify-start">
           <LeftDiv />
            <div className="flex flex-col justify-start w-[70%] ">
             <RightDiv />
            </div>
        </div>
        <div>
            <Footer />
        </div>
        </>
    )
}
export default MainComponent;