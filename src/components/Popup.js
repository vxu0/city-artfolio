import summer from '../../text/summer.html';
import orchid from '../../images/orchid.png';
import construction from '../../images/construction.jpeg';
import kitchen from '../../images/kitchen.jpeg';
import sprawl from '../../images/sprawl.jpeg';
import fish from '../../images/fish.png';
import film from '../../images/film-set.png';
import corner from '../../images/corner.jpeg';

const areaImages = {
    // 1: kitty,
    // 2: summer,
    3: corner,
    4: construction,
    5: orchid,
    6: sprawl,
    7: kitchen,
    8: fish,
    9: film,
    // 10: door,
    // 11: lamp
};

export default function (props) {
    console.log(props.area);
    const id = Number(props.area.name);
    return (
        <div className='popup'>
            <button className="popup-button" onClick={props.handleClick}>X</button>
            {id === 2 && <iframe src={summer}/>} 
            {id === 1 && <p>"meow"</p>}
            {id !== 2 && id !== 1 && <img src={areaImages[id]}></img>}
            {id > 1 &&
            <div className='popup-text-wrapper'>
                <h1>{props.area.title}</h1>
            </div>}
        </div>
    );
};