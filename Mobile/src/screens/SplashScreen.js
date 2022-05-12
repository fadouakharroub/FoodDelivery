import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import {Colors, Images }from '../contants';
const SplashScreen = () => {
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
      height: 150,
      width: 150
  },
  titleText: {
      color: Colors.DEFAULT_WHITE,
      fontSize: 32,
  }
});

export default SplashScreen; 
