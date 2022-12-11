import GoogleMapReact from "google-map-react";

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDeivyDasdF1CfQjoF78g3-Qg7xrogf93A" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {/* {markers} */}
      </GoogleMapReact>
      {/* {locationInfo && <LocationInfoBox info={locationInfo} />} */}
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
