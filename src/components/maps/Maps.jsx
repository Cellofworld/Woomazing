import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import "./maps.css";

function Maps() {

    const defaultState = {
        center: [55.684758, 37.738521],
        zoom: 15,
      };

  return (
    <div className="yaandex-map">
        <YMaps>
            <Map 
                style={{width:"100%", height:"450px"}} 
                defaultState={defaultState}>
                    <Placemark geometry={[55.684758, 37.738521]} />
            </Map>
    </YMaps>
    </div>
  )
}

export default Maps