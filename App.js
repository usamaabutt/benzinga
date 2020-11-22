import {StatusBar} from "expo-status-bar";
import React, {useEffect} from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import MainNav from "./src/navigation";
import {Provider as StoreProvider} from "react-redux";
import store, {persistor} from "./src/redux/store";
import {PersistGate} from "redux-persist/integration/react";
import * as Font from "expo-font";
import {colors} from "./src/utilities";

console.disableYellowBox = true;

export default function App() {
   useEffect(() => {
      const loadFonts = async () =>
         await Font.loadAsync({
            // 'any_name' : require('path_to_your_font_file')
            comfortaBold: require("./src/assets/fonts/Comfortaa-Bold.ttf"),
            comfortaLight: require("./src/assets/fonts/Comfortaa-Light.ttf"),
            comfortaRegular: require("./src/assets/fonts/Comfortaa-Regular.ttf"),
         });

      loadFonts();
      // other stuff
   });

   return (
      <SafeAreaView style={styles.container}>
         <StatusBar style="light"/>
         <StoreProvider store={store}>
            <PersistGate persistor={persistor} loading={false}>
               <MainNav/>
            </PersistGate>
         </StoreProvider>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.primary
   }
})
