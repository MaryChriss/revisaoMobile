import { StyleSheet, Text, View } from "react-native";

//COMPONENTE FILHO
export default function ItemCard(props) {
  return (
    <View style={styles.item}>
      <Text style={styles.title} >{props.title}</Text>
      <Text style={styles.title}>{props.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f9c2ff",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  content: {
    fontSize: 14,
    fontWeight: "normal"
  }
})