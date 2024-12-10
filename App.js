import React from "react";
import Mapper from "./components/Mapper";
import day from './images/city-day-v0-small.png';
import night from './images/city-night-v0-small.png';
import areas from './map-areas.json';

export function App() {
    
    const [mode, setMode] = React.useState("day");

    function changeMode() {
        if (mode === "day") {
            setMode("night");
        } else {
            setMode("day");
        };
    }
    
    return (
        <div className="map-container">
            <Mapper name='map' areas={areas} dayImg={day} nightImg={night} mode={mode} changeMode={changeMode}/>
        </div>
    );
};