import {
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  Button,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Header from "../components/Header";
import DatePicker from "react-native-date-ranges";
import { Modal, ModalButton, ModalFooter,ButtomModal } from "react-native-modals";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectDates, setSelectDate] = useState();
  const [room, setRoom] = useState(1);
  const [adult, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [modalVisibile, setModalVisibile] = useState(false);
  useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerShown: true,
        title: "Booking.com",
        headerTitleStyle: { fontSize: 20, fontWeight: "bold", color: "white" },
        headerStyle: {
          backgroundColor: "#003580",
          height: 100,
          borderBottomColor: "transparent",
          shadowColor: "transparent",
        },
        headerRight: () => (
          <Ionicons
            name="notifications-outline"
            size={24}
            color="white"
            style={{ marginRight: 12 }}
          />
        ),
      },
      []
    );
  });
  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        primary
        title="Submit"
        style={{
          text: { fontSize: 20 },
          container: { width: "80%", marginHorizontal: "3%" },
        }}
      />
    );
  };

  return (
    <>
      <View>
        <Header />
        <ScrollView>
          <View
            style={{
              margin: 20,
              borderColor: "#FFC72C",
              borderWidth: 2,
              borderRadius: 6,
            }}
          >
            {/* //destination */}
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderBottomColor: "#FFC72C",
                borderBottomWidth: 1,
                paddingVertical: 10,
              }}
            >
              <AntDesign name="search1" size={24} color="black" />
              <TextInput
                placeholderTextColor="black"
                placeholder="Search ..."
              />
            </Pressable>
            {/* // Select day */}
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderBottomColor: "#FFC72C",
                borderBottomWidth: 1,
                paddingVertical: 10,
              }}
            >
              <Feather name="calendar" size={24} color="black" />
              <DatePicker
                style={{
                  width: 300,
                  height: 30,
                  borderRadius: 0,
                  borderWidth: 0,
                  borderColor: "transparent",
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                  headerStyle: {
                    backgroundColor: "#003580",
                  },
                  contentText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                }}
                selectedBgColor="#0047AB"
                allowFontScaling={false}
                placeholder={"Apr 27, 2018 → Jul 10, 2018"}
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) =>
                  setSelectDate(startDate, endDate)
                }
                mode={"range"}
              />
            </Pressable>
            {/* //room and guest */}
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderBottomColor: "#FFC72C",
                borderBottomWidth: 1,
                paddingVertical: 10,
              }}
            >
              <Ionicons name="person-outline" size={24} color="black" />
              <TextInput
                placeholderTextColor="gray"
                placeholder="1 Room ~ 2 Adults ~ 0 Children"
              />
            </Pressable>
            {/* //search buttom */}
            <Pressable
              style={{
                paddingHorizontal: 10,
                borderBottomColor: "#FFC72C",
                // borderBottomWidth: 1,
                paddingVertical: 15,
                backgroundColor: "#2a52be",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: "500",
                  color: "white",
                }}
              >
                Search
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
      <ButtomModal
        swipeThreshold={200}
        onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              onPress={() => setModalVisibile(!modalVisibile)}
              text="Apply"
              style={{
                color: "white",
                marginBottom: 20,
                backgroundColor: "#003580",
              }}
            />
          </ModalFooter>
        }
      ></ButtomModal>
    </>
  );
  // };
};

export default HomeScreen;
