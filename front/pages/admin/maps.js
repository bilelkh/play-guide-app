import React from "react";
// layout for this page
import Admin from "layouts/Admin.js";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const locations = [
  {
    name: "Location 1",
    lat: 41.3954,
    lng: 2.162,
  },
  {
    name: "Location 2",
    lat: 41.3917,
    lng: 2.1649,
  },
  {
    name: "Location 3",
    lat: 41.3773,
    lng: 2.1585,
  },
  {
    name: "Location 4",
    lat: 36.157055,
    lng: -86.7696144,
  },
  {
    name: "Location 5",
    lat: 36.1577547,
    lng: -86.7785841,
  },
];
const renderMarkers = (map, maps) => {
  let newMap = null;
  newMap = locations.map((location) => {
    let marker = new maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map,
      title: "Hello World!",
    });

    return marker;
  });

  return newMap;
};

const CustomSkinMap = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyCcbJ8p8bp7OOC_Rv_H_pSupQJCcapbDyY&libraries=places",
        }}
        yesIWantToUseGoogleMapApiInternals
        defaultCenter={{ lat: 59.95, lng: 30.33 }}
        defaultZoom={11}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        onClick={(e) => console.log("===e===", e)}
      ></GoogleMapReact>
    </div>
  );
};

function Maps() {
  return <CustomSkinMap />;
}

Maps.layout = Admin;

export default Maps;

const markers = (locations, handler) => {
  return locations.map((location) => <div>{location.text}</div>);
};
