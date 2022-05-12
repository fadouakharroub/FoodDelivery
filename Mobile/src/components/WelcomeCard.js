import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Display } from '../utils';
import {Fonts } from '../contants';


const WelcomeCard = (title, content, image) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source/>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.contentText}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Display.setWidth(100),
  },
image: {
  height: Display.setHeight(30),
  width: Display.setWidth(60),
},
titleText: {
  fontSize:22,
  fontFamily: Fonts.POPPINS_BOLD,
},
contentText: {
      fontFamily: Fonts.POPPINS_LIGHT,
      fontSize: 18, 
      textAlign: 'center',
      marginHorizontal: 20,

}
  
});

export default WelcomeCard; 
