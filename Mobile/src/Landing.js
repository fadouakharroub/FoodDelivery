import React from 'react';
import {  StyleSheet, View, ImageBackground, TouchableOpacity, Text } from 'react-native';



function Landing ({ navigation }) {
  return (
   <ImageBackground source={require('../assets/food.jpg')} style={styles.container}>

     <View style={styles.card}>
     <View>
        <Text style={styles.tex}>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </View>
     <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginBtn}>
        <Text  style={styles.loginText}>Get Started
        </Text>/
      </TouchableOpacity>
      
     </View>
  
   </ImageBackground>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 3,
    backgroundColor: "rgba(5, 116, 227, 0.781)",
  },

  loginText:{
    marginTop:15,
    color: "#fff",

  },
  card:{
    width: "80%",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal:10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#c1c1c1b1"
    
  },
  tex:{
    textAlign: "center",
    letterSpacing: 3,
    paddingBottom:20,
    color : "rgba(0, 0, 0, 0.811)",
    fontWeight: "bold",

  }

  

  })

export default Landing;