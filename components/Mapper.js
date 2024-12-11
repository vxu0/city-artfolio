import React, { useCallback } from 'react';
import ImageMapper from 'react-img-mapper';
import Popup from './Popup';


const Mapper = props => {

  console.log("render mapper");
  
  const [popup, setPopup] = React.useState(null);

  const closePopup = () => {
    setPopup(null);
  }
  
  const URL = props.mode === "day" ? props.dayImg : props.nightImg;
  // const URL = props.dayImg;
  const MAP = {
      name: props.name,
      areas: props.areas,
  };

  const handleMapClick = useCallback((area, index, event) => {
    // console.log("map click");
    switch (area.name) {
      case "11":
        props.changeMode();
        break;
      // case "12":
      //   meow();
      //   break;
      case "10":
        window.open('https://www.instagram.com/vaismade/', '__blank').focus();
        break;
      default:
        setPopup(area);
    }
  });
  return <div className="map-container">

    <ImageMapper src={URL} map={MAP} disabled={popup !== null} onClick={handleMapClick}/>

    {popup &&<Popup area={popup} handleClick={closePopup}/>
    }

    </div>;
};

// function meow() {
//   // play sound
//   console.log("meow");
// };

export default Mapper;