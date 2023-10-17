import { View, Text, Pressable, Image, Dimensions } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const PropertyCard = ({
  rooms,
  children,
  adult,
  selectedDate,
  property,
  availableRooms,
}) => {
  const { width, height } = Dimensions.get("window");
  return (
    <View>
      <Pressable
        style={{ flexDirection: "row", margin: 15, backgroundColor: "white" }}
      >
        <View>
          <Image
            style={{ height: height / 4, width: width - 280 }}
            source={{ uri: property.image }}
          />
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ width: 190 }}>{property.name}</Text>
            <AntDesign name="hearto" size={24} color="red" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              marginTop: 7,
            }}
          >
            <MaterialIcons name="stars" size={24} color="black" />
            <Text>{property.rating}</Text>
            <View
              style={{
                width: 100,
                paddingVertical: 3,
                // padding: 4,
                borderRadius: 5,
                backgroundColor: "#6CB4EE",
              }}
            >
              <Text
                style={{ textAlign: "center", fontSize: 15, color: "white" }}
              >
                Genius Level
              </Text>
            </View>
          </View>

          <Text
            style={{
              marginTop: 6,
              width: 210,
              color: "gray",
              fontWeight: "bold",
            }}
          >
            {property.address.length > 50
              ? property.address.substr(0, 50)
              : property.address}
          </Text>

          <Text style={{ marginTop: 4, fontSize: 15, fontWeight: "500" }}>
            Price for 1 night {adult} adults
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              marginTop: 4,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "red",
                textDecorationLine: "line-through",
              }}
            >
              {property.oldPrice * adult}$
            </Text>
            <Text style={{ fontSize: 18 }}>{property.newPrice * adult}$</Text>
          </View>
          <View style={{ margin: 6 }}>
            <Text style={{ fontSize: 15, color: "gray" }}>Deluxe Room</Text>
            <Text style={{ fontSize: 15, color: "gray" }}>
              Hotel Room: 1 bed
            </Text>
          </View>
          <View style={{
                width: 150,
                paddingVertical: 2,
                paddingHorizontal: 3,
                marginTop: 2,
                borderRadius: 5,
                backgroundColor: "#6082B6",
              }}>
            <Text style={{textAlign: "center", color: "white"}}>Limited Time deal</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;
