import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Colors } from '../contents';

const SignUpScreen = () => {

    return (
        <View style={StyleSheet.container}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={Colors.DEFAULT_WHITE}
            translucent
            />
          <Separator height={StatusBar.currentHeight} />
          <View style={styles.headerContainer}>
            <ionIcons
              name="chevron-back-outline"
              size={30}
              onPress={() => navigation.goBack()}
              />
            <Text style={styles.headerTitle}>Sign Up</Text>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
    },
});

export default SignUpScreen;