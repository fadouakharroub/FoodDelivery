import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList} from 'react-native';
import { Colors } from '../contants';
import { WelcomeCard } from '../components';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
         barStyle='dark-content'
         backgroundColor={Colors.DEFAULT_WHITE}
         translucent
      />
      <View style={styles.welcomeListContainer}>
         <FlatList 
         data={General.WELCOME_CONTENT}µ
         keyExtractor={item => item.title}
         horizontal
         showsHorizontalScrollIndicator={false}
         renderItem={({item}) => <WelcomeCard {...item}/> }

         />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  
});

export default WelcomeScreen; 
