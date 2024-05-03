// Google maps library
import {
  GoogleMap,
  LoadScript,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import React from "react";
import Search from "../../components/Search";
import SpeedDial from "../../components/map-components/SpeedDial";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const MapApp = () => {
  const [map, setMap] = React.useState(null);
  const [searchBox, setSearchBox] = React.useState(null);

  const onMapLoad = (map) => {
    setMap(map);
  };

  const onLoad = (ref) => {
    setSearchBox(ref);
  };

  const onPlacesChanged = () => {
    const places = searchBox.getPlaces();
    console.log(places);
    const place = places[0];
    const location = {
      lat: place.geometry.location.lat() || 0,
      lng: place.geometry.location.lng() || 0,
    };
    map.panTo(location);
  };

  const items = [
    <span className="rounded-full bg-rose-500 text-white w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-rose-600">
      <Link to={"/home"}>
        <HomeOutlined />
      </Link>
    </span>,

    <span className="rounded-full bg-rose-500 text-white w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-rose-600">
      <Link to={"/settings/profile"}>
        <UserOutlined />
      </Link>
    </span>,
  ];
  return (
    <div className="h-screen">
      <LoadScript
        libraries={["places"]}
        googleMapsApiKey={import.meta.env.MAPAPIKEY}
      >
        <GoogleMap
          onLoad={onMapLoad}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
          <div className="flex flex-row">
            <div className="m-8 flex flex-row gap-32">
              <SpeedDial>{items}</SpeedDial>
            </div>
            <StandaloneSearchBox
              onLoad={onLoad}
              onPlacesChanged={onPlacesChanged}
            >
              <Search text="Digite o endereco" />
            </StandaloneSearchBox>
          </div>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapApp;
