import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {WP, size} from "../../utilities";

export const Tag = ({backgroundColor, borderColor, titleColor, rightIcon, rightNumber, leftIcon, title, containerStyle}) => {
   return (
      <View style={[styles.container, {backgroundColor, borderColor}, containerStyle]}>
         <View style={[styles.iconContainer, {backgroundColor: borderColor}]}>
            {leftIcon}
         </View>
         <Text style={[styles.title, {color: titleColor}]}>{title}</Text>
         {rightNumber &&
         <View style={[styles.rightIconContainer, {borderColor: titleColor}]}>
            <Text style={[styles.title, {marginHorizontal: 0, color: titleColor}]}>5</Text>
         </View>}
         {rightIcon && <View style={styles.rightIcon}>
            {rightIcon}
         </View>}
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: 'rgb(248, 254, 249)',
      borderWidth: 1,
      alignSelf: 'flex-start',
      borderColor: 'rgba(99, 172, 99, 0.3)',
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      height: WP('6.5')
   },
   title: {
      color: 'rgba(99, 172, 99, 0.7)',
      fontSize: size.xxsmall,
      fontWeight: '900',
      marginHorizontal: WP('2')
   },
   iconContainer: {
      backgroundColor: 'rgba(99, 172, 99, 0.2)',
      borderRadius: 5,
      flexDirection: 'row',
      width: WP('5'),
      height: WP('5'),
      marginLeft: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   rightIconContainer: {
      borderColor: 'rgba(99, 172, 99, 0.7)',
      borderRadius: 5,
      borderWidth: 1,
      flexDirection: 'row',
      width: WP('5'),
      height: WP('5'),
      marginRight: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   rightIcon: {
      paddingRight: WP('2')
   }
});
