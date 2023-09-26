import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";

const MapScreen = () => {
  const mapView = useRef(null);
  const route = useRoute();
  const coordinates = [];

  const details = route.params.searchResults.map((item) =>
    item.properties.map((prop) => {
      coordinates.push({
        latitude: Number(prop.latitude),
        longitude: Number(prop.longitude),
      });
    })
  );

  useEffect(() => {
    mapView.current.fitToCoordinates(coordinates, {
      edgePadding: { top: 190, left: 190, bottom: 190, right: 190 },
    });
  }, []);
  return (
    <View>
      <MapView ref={mapView} style={{ width: "100%", height: "100%" }}>
        {route.params.searchResults.map((item) =>
          item.properties.map((property) => (
            <Marker
              key={property.id}
              title={property.name}
              coordinate={{
                latitude: Number(property.latitude),
                longitude: Number(property.longitude),
              }}
            >
              <Pressable
                style={{
                  backgroundColor: "#003580",
                  paddingHorizontal: 7,
                  paddingVertical: 4,
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  {property.newPrice}
                </Text>
              </Pressable>
            </Marker>
          ))
        )}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
