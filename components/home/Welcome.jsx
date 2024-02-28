import { View, Text, StyleSheet } from "react-native";
import React from "react";
import styles from "./Welcome.style";
import { COLORS, SIZES } from "../../constants/index";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
        Find The Most
      </Text>

      <Text style={styles.welcomeTxt(COLORS.primary, 0)}>Luxury Furniture</Text>
    </View>
  );
};

export default Welcome;
