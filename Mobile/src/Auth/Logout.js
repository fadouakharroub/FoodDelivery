import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import API from "../Api";
const Logout = ({ navigation }) => {
  const logout = () => {
    API.post(`auth/logout`).then((res) => {
      if (res.status === 200) {
        navigation.navigate("Home");
      }
    });
  }
  const cancel = () => {
        navigation.navigate("Home");
  }
    return (
      <View>
      <Button
        title="Cancel"
        onPress={() =>cancel()}
      />
      <Button
      title="Confirm"
      onPress={() =>logout()}
    />
    </View>
    );
  };
  export default  Logout;