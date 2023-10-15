import {
  View,
  Image,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  Button,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Header from "../components/Header";
import DatePicker from "react-native-date-ranges";
import {
  ModalButton,
  ModalFooter,
  BottomModal,
  ModalTitle,
  SlideAnimation,
  ModalContent,
} from "react-native-modals";

const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectDate, setSelectDate] = useState();
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
  console.log(route.params);

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
              onPress={() => navigation.navigate("Search")}
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
                placeholder={
                  route?.params ? route.params.input : "Enter Your Destination"
                }
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
                placeholder={"Select Your Dates"}
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) =>
                  setSelectDate(startDate, endDate)
                }
                mode={"range"}
              />
            </Pressable>
            {/* //room and guest */}
            <Pressable
              onPress={() => setModalVisibile(!modalVisibile)}
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
                placeholder={`${room} Room ~ ${adult} Adults ~ ${children} Children`}
              />
            </Pressable>
            {/* //search buttom */}
            <Pressable
              style={{
                paddingHorizontal: 10,
                borderBottomColor: "#FFC72C",
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

          {/* container */}

          <Text
            style={{ marginHorizontal: 20, fontSize: 16, fontWeight: "500" }}
          >
            Travel more spend less
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                backgroundColor: "#003580",
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                Genius
              </Text>
              <Text style={{ color: "white", fontSize: 15, fontWeight: "400" }}>
                You are ate genius level one in our loyalty program
              </Text>
            </Pressable>

            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                borderColor: "#E0E0E0",
                borderWidth: 2,
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                Discount 15%
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "400" }}>
                Complete 5 stays to unlocks level 2
              </Text>
            </Pressable>

            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                backgroundColor: "#003580",
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                Genius
              </Text>
              <Text style={{ color: "white", fontSize: 15, fontWeight: "400" }}>
                You are ate genius level one in our loyalty program
              </Text>
            </Pressable>
          </ScrollView>

          <Pressable
            style={{
              marginTop: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/booking.com_.png")}
              style={{ resizeMode: "cover", height: 95, width: 200 }}
            />
          </Pressable>
        </ScrollView>
      </View>
      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisibile(!modalVisibile)}
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
        modalTitle={<ModalTitle title="Select rooms and guests" />}
        modalAnimation={new SlideAnimation({ slideFrom: "bottom" })}
        onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
        visible={modalVisibile}
        onTouchOutside={() => setModalVisibile(!modalVisibile)}
      >
        <ModalContent style={{ width: "100%", height: 310 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Rooms</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setRoom(Math.max(1, room - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  backgroundColor: "#E0E0E0",
                  borderColor: "#BEBEBE",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 19,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {room}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setRoom((e) => e + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  backgroundColor: "#E0E0E0",
                  borderColor: "#BEBEBE",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 19,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Adults</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setAdults(Math.max(1, adult - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  backgroundColor: "#E0E0E0",
                  borderColor: "#BEBEBE",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 19,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {adult}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setAdults(Math.max(1, adult + 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  backgroundColor: "#E0E0E0",
                  borderColor: "#BEBEBE",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 19,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Childrens</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setChildren(Math.max(0, children - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  backgroundColor: "#E0E0E0",
                  borderColor: "#BEBEBE",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 19,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {children}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setChildren((e) => e + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  backgroundColor: "#E0E0E0",
                  borderColor: "#BEBEBE",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 19,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
  // };
};

export default HomeScreen;
