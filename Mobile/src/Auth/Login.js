import { View, TextInput, Button, StyleSheet, Alert,Image } from "react-native";
import React, { useState } from "react";

import API from "../Api";
const Login = ({ navigation }) => {
  const [users, setUsers] = useState({});
  const handleInput = (e) => {
 
    setUsers({ ...users, [e[0]]: e[1] });
  };
  const handleSubmit = (e) => {

    // API.post(`auth/login`, users).then((res) => {
    //   if (res.status === 200) {
        navigation.navigate("Home");
        // access();
    //   }
    // });
  };
  return (
    <View>
        <Image
        style={styles.tinyLogo}
        source={require('../../assets/logo (2).png')}
      />
      <TextInput
        style={styles.input}
        textContentType="emailAddress"
        placeholder="Email"
        onChangeText={(text) => handleInput(["email", text])}
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Password"
        onChangeText={(text) => handleInput(["password", text])}
      />
      <Button title="Login" onPress={() => handleSubmit()} />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
   borderRadius: 10, 
  },
  tinyLogo: {
    width: 200,
    height: 200,
    margin: "auto",
  },
});
export default Login;
