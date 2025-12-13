import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
} from "react-native";
import { gStyle } from "../styles/style";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Main({ navigation }) {
  const [news, serNews] = useState([
    {
      name: "Google",
      anons: "Google!!",
      full: "Google is cool",
      key: "1",
      img: "https://itproger.com/img/courses/x1494770683.jpg.pagespeed.ic.SUxRy3924C.jpg",
    },
    {
      name: "Apple",
      anons: "Apple!!",
      full: "Apple is cool",
      key: "2",
      img: "https://itproger.com/img/courses/x1481188465.jpg.pagespeed.ic.DtXQoDI8_R.jpg",
    },
    {
      name: "Yandex",
      anons: "Yandex!!",
      full: "Yandex is cool",
      key: "3",
      img: "https://itproger.com/img/courses/x1733135835.jpg.pagespeed.ic.tEKDBA2PXG.jpg",
    },
  ]);

  const [modalWindow, setModalWindow] = useState(false);

  return (
    <View style={gStyle.main}>
      <Modal visible={modalWindow}>
        <View style={gStyle.main}>
          <Ionicons
            name="close-circle"
            size={34}
            color="red"
            style={styles.iconClose}
            onPress={() => setModalWindow(false)}
          />
          <Text style={styles.title}>Форма добавления статей</Text>
        </View>
      </Modal>
      <Ionicons
        name="add-circle"
        size={34}
        color="green"
        style={styles.iconAdd}
         onPress={() => setModalWindow(true)}
      />
      <Text style={[gStyle.title, styles.header]}>Главная страница</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("FullInfo", item)}
          >
            <Image
              style={styles.image}
              source={{
                uri: item.img,
              }}
            />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  iconClose: {
    textAlign: "center",
  },
  iconAdd: {
    textAlign: "center",
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: 200,
  },

  header: {
    marginBottom: 30,
  },

  item: {
    width: "100%",
    marginBottom: 30,
  },

  title: {
    fontFamily: "mt-bold",
    fontSize: 22,
    textAlign: "center",
    marginTop: 20,
    color: "#474747",
  },

  anons: {
    fontFamily: "mt-light",
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
    color: "#474747",
  },
});
