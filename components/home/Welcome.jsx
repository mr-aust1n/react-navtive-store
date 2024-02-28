import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./Welcome.style";
import { COLORS, SIZES } from "../../constants/index";
import { Feather } from "@expo/vector-icons";

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
          {""}
          Find The Most
        </Text>

        <Text style={styles.welcomeTxt(COLORS.primary, 0)}>
          {""}
          Luxury Furniture
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather
            name="search"
            size={24}
            style={styles.searchContainer}
          ></Feather>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
