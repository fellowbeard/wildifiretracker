import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const fireMarkers = eventData.map((ev) => {
    if (ev.categories[0].id === "wildfires") {
      // console.log(ev.geometry);
      return (
        <LocationMarker
          key={ev.id}
          lat={ev.geometry[0].coordinates[1]}
          lng={ev.geometry[0].coordinates[0]}
          onClick={() =>
            setLocationInfo({
              id: ev.id,
              type: ev.categories[0].title.slice(0, -1),
              title: ev.title,
              source: ev.sources[0].url,
            })
          }
        />
      );
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {fireMarkers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 29.973709,
    lng: -90.069446,
  },
  zoom: 6,
};

export default Map;
