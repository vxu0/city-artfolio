import React from "react";
import ReactDOM from "react-dom/client";
import Mapper from "./components/Mapper";
import day from './../images/city-day-v0.png';
import night from './../images/city-night-v0.png';
import areas from './../map-areas.json';

function App() {
    
    const [mode, setMode] = React.useState("day");

    function changeMode() {
        if (mode === "day") {
            setMode("night");
        } else {
            setMode("day");
        };
    }
    
    return (<div className="map-container">
                <Mapper name='map' areas={areas} dayImg={day} nightImg={night} mode={mode} changeMode={changeMode}/>
            </div>)
};


 
 // add click event listener
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <App/>
);
