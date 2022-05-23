import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"  
import { SplashScreen, WelcomeScreen, SignInScreen, SignUpScreen} from "../screens";

const Stack = createStackNavigator()

const Navigators = () => {
return(
    <NavigationContainer>
       <Stack.Navigator ScreenOptions={{HeaderShow: false}}>
         <Stack.Screen name="Splash" component={SplashScreen}/>
         <Stack.Screen name="Welcome" component={WelcomeScreen}/>
         <Stack.Screen name="SignIn" component={SignInScreen}/>
         <Stack.Screen name="SignUp" component={SignUpScreen}/>

 
       </Stack.Navigator>
    </NavigationContainer>
);
 };

 export default Navigators;