import { StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES } from "../../constants/index";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    marginBottom: SIZES.xSmall,
    marginHorizontal: 12,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    fontFamily: "bold",
    fontSize: SIZES.xLarge,
  },
});

export default styles;
