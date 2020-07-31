import React from "react";

function Map() {
  return (
      <iframe
	      title="map of routes"
        id="map"
        src="https://www.google.com/maps/d/embed?mid=1xbva_Q6kM1gt1N9NmcpCJK647ajTKubI"
        width="100%"
        height="600"
        style={{borderWidth:0}} 
        frameBorder="0" 
      ></iframe>
  );
}

export default Map;
