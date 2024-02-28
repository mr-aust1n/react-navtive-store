import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./Welcome.style";
import { COLORS, SIZES } from "../../constants/index";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

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
          <Feather name="search" size={24} style={styles.searchIcon}></Feather>
        </TouchableOpacity>

        <View style={styles.searchWrapper}>
          <TextInput
            styles={styles.searchInput}
            value=""
            onPressIn={() => {}}
            placeholder="What are you looking for"
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
