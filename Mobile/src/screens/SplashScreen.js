import React, {useEffect} from 'react';
import { StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import {Colors, Images, Fonts }from '../contents';
import { Display } from '../utils';
const SplashScreen = ({navigation}) => {
useEffect(() =>{
  setTimeout(() => {
    navigation.navigate('Welcome');
  }, 2000)
},  [])
  return (
    <View style={styles.container}>
        <StatusBar barStyle='Light-content' backgroundColor={Colors.DEFAULT_GREEN}
        translucent
        />
        <Image 
        source={Images.PLAT}
        resizeMode="contain"
        style={styles.Image}
        />
      <Text style={styles.titleText}>FoodDelivery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
      height: Display.setHeight(30),
      width:  Display.setWidth(60),
  },
  titleText: {
      color: Colors.DEFAULT_BLACK,
      fontSize: 32,
      fontFamily: Fonts.POPPINS_EXTRA_LIGHT,
  }
});

export default SplashScreen; 
