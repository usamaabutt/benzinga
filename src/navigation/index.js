import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Ideas from "../screens/mainflow/Ideas";

const Stack = createStackNavigator();

const MainAppNav = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator
            headerMode="none"
         >
            <Stack.Screen name="Ideas" component={Ideas}/>
         </Stack.Navigator>
      </NavigationContainer>
   );
};
export default MainAppNav;
