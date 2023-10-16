import { View, Text, Pressable } from "react-native";
import React from "react";

const PropertyCard = (rooms,children,adult,selectedDate,property,availableRooms) => {
  return (
    <View>
      <Pressable style={{flexDirection:"row",margin: 15,backgroundColor:"white"}}>
        <View><Image source={{uri:property.Image}}/></View>
        <View></View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;
