import React from 'react';
import { ScrollView, StyleSheet, TextInput, Text,View } from 'react-native';
import Cards from './Cards'
import Feather from 'react-native-vector-icons/Feather';
const HomeScreen = ({ navigation }) => {
    return (

    <ScrollView style={styles.container} >

      <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            marginHorizontal:20,
            marginTop: 10,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{marginRight: 5}}
          />
          <TextInput placeholder="Search" />
        </View>
        
        <Cards/>
     
    </ScrollView>
    );
  };
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#FFF",
    },
  
    TextInput: {
      height: 40,
      width:"80%",
      padding: 10,
      marginLeft: 10,
      backgroundColor: "#ffff",
      borderRadius: 5,
      fontFamily:'poppins-regular'
  
    }
  });
  export default  HomeScreen;