import React, {useState} from 'react';
import { StyleSheet, 
  Text, 
  View, 
  StatusBar, 
  FlatList, 
  TouchableOpacity} from 'react-native';
import { Colors, Fonts } from '../contants';
import { WelcomeCard, Separator} from '../components';
import { Display } from '../utils';

const Pagination = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.page} />
      <View style={styles.page} />
      <View style={styles.page} />
    </View>
  )
}

const WelcomeScreen = () => {
  const []
  return (
    <View style={styles.container}>
      <StatusBar
         barStyle='dark-content'
         backgroundColor={Colors.DEFAULT_WHITE}
         translucent
      />
      <Separator height={StatusBar.currentHeight}/>
      <Separator height={Display.setHeight(8)}/>
      <View style={styles.welcomeListContainer}>
         <FlatList 
         data={General.WELCOME_CONTENT}µ
         keyExtractor={item => item.title}
         horizontal
         showsHorizontalScrollIndicator={false}
         pagingEnabled
         overScrollMode='never'
         renderItem={({item}) => <WelcomeCard {...item}/> }
/>
      </View>
      <Separator height={StatusBar.currentHeight}/>
      <Pagination />
      <Separator height={StatusBar.currentHeight}/>
      <View style={styles.buttonContainer}>
        <TouchableOpacity activeOpacity={0.8} style={{marginLeft: 10}}>
           <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
           <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
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
welcomeListContainer: {
 height: Display.setHeight(60),
},
  pageContainer: {
  flexDirection: "row"
  },
  page: {
    height: 8,
    width: 15,
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 32,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Display.setWidth(90),
    alignItems: "center"
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_BOLD,
    lineHeight: 16*1.4,
  },
  button: {
    backgroundColor: Colors.LIGHT_GREEN,
    paddingVertical: 20,
    paddingHorizontal: 11,
    borderRadius: 32,
  },
  
});

export default WelcomeScreen; 
