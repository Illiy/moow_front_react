import React,{useState} from 'react'
import { GoogleMap, useJsApiLoader, MarkerClusterer, Marker, InfoWindow, InfoBox} from '@react-google-maps/api';
import {DefaultTheme} from './theme';
import marker from '../../assets/Pin.svg'
import fonk from '../../assets/angar.png'


const containerStyle = {
  width: '100%',
  height: '100%'
};

const defaultOptions = {
  styles: DefaultTheme,
}

const center = {
  lat: 50.0000000,
  lng: 30.0000000
};

function GoogleMapComponentq() {
    const [activeMarker, setActiveMarker] = useState(null);
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyBEazP8n2OsBYiKQHM3ltFwJmcfWNVyG1o"

    })

    const [map, setMap] = useState(null)

    const [evenMarkerChecked, setEvenMarkerChecked] = useState(true)

    const handleActiveMarker = (marker) => {
      setEvenMarkerChecked(marker === null ? true: evenMarkerChecked === true ? false : evenMarkerChecked === false ? true : true)
      setActiveMarker(marker);
      console.log(evenMarkerChecked)
      console.log(activeMarker)
    };

    const onLoad = (map) => {
      const bounds = new window.google.maps.LatLngBounds(center);
      locations.forEach(({ position }) => bounds.extend(position));
      map.fitBounds(bounds);
    };

    const locations = [
      { position: {lat: 50.270, lng: 30.310}, id:1},
      { position: {lat: 51.270, lng: 32.310}, id:2},
      { position: {lat: 53.270, lng: 28.310}, id:3},
      { position: {lat: 54.270, lng: 37.310}, id:4}
    ]

    return isLoaded ? (
        <GoogleMap
            onClick={() => handleActiveMarker(null)}
            mapContainerStyle={containerStyle}
            onLoad={onLoad}
            options={defaultOptions}
        >

                    {locations.map((el) => (
                        <Marker
                        icon={marker}
                        key={el.id}
                        position={el.position}
                        onClick={() => handleActiveMarker(el.id)}
                      >
                        {evenMarkerChecked === false ? 
                          activeMarker === el.id && 
                          <InfoWindow onChange={() => handleActiveMarker(null)} onCloseClick={() => handleActiveMarker(null)}>
                            <div className='infoWindow-buyBlock'>
                              <div className='top'>
                                <div className='img' style={{backgroundImage: `url(${fonk})`}}></div>
                                <div className='left'>
                                  <h2>Склад 1</h2>
                                  <span>1200/кв.м.</span>
                                  <div>4.8</div>
                                </div>
                                <div className='right'>
                                  <span>21.06.2022</span>
                                  <p>300 грн/кв.м.</p>
                                </div>
                              </div>
                              <div className='middle'>
                                <div className='middle-row'>
                                  <span className='middle-col1'>Дата</span>
                                  <span className='middle-col2'>02-02-2022</span>
                                </div>
                                <div className='middle-row'>
                                  <span className='middle-col1'>Область</span>
                                  <span className='middle-col2'>Київська</span>
                                </div>
                                <div className='middle-row'>
                                  <span className='middle-col1'>Район</span>
                                  <span className='middle-col2'>Броварський</span>
                                </div>
                                <div className='middle-row'>
                                  <span className='middle-col1'>Нас.пункт</span>
                                  <span className='middle-col2'>Бровари</span>
                                </div>
                              </div>
                              <div className='bottom'>
                                <button className='bottom1'>Замовити</button>
                                <button className='bottom2'>Всі склади</button>
                              </div>
                            </div>
                          </InfoWindow> : null}
                      </Marker>
                    ))}
        </GoogleMap>
    ) : null
}

export default React.memo(GoogleMapComponentq)

