import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import {WP, colors, size} from "../../utilities";
import {Feather, AntDesign, MaterialCommunityIcons, Fontisto} from '@expo/vector-icons';
import {Tag} from './Tag';
import moment from "moment";

export const IdeaCard = ({item, containerStyle}) => {
   return (
      <View style={[styles.container, containerStyle]}>
         <View style={styles.header}>
            <View style={styles.profileNIContainer}>
               <Avatar
                  rounded
                  size={30}
                  source={{
                     uri:
                        item.user?.profile_picture ? item.user?.profile_picture : 'https://picsum.photos/seed/picsum/200/200',
                  }}
               />
               <Text numberOfLines={1} style={styles.name}>{item.user?.name}</Text>
            </View>
            <Text style={styles.date}>{moment(item?.created_at).format('M/D/YY, h:mmA')}</Text>
         </View>
         <View style={styles.tagContainer}>
            <Tag
               borderColor={'rgba(99, 172, 99, 0.3)'}
               backgroundColor={'rgb(248, 254, 249)'}
               titleColor={'rgba(99, 172, 99, 0.7)'}
               rightNumber={null}
               title={item?.position}
               rightIcon={null}
               leftIcon={<Feather name="trending-up" size={10} color={'rgba(99, 172, 99, 1)'}/>}
            />
            <Tag
               containerStyle={styles.marginLeft}
               borderColor={'rgba(114, 134, 190, 0.3)'}
               backgroundColor={colors.white}
               titleColor={'rgba(114, 130, 190, 1)'}
               rightNumber={item?.allocation}
               title={item?.action}
               rightIcon={null}
               leftIcon={<MaterialCommunityIcons name="message-text-outline" size={12}
                                                 color={'rgba(114, 134, 190, 1)'}/>}
            />
         </View>
         <Text style={styles.reasonStyle}>Reason: <Text style={styles.reasonText}> {item?.reason} </Text> </Text>
         <Tag
            containerStyle={styles.tickerIcon}
            borderColor={'rgba(114, 134, 190, 0.3)'}
            backgroundColor={colors.white}
            titleColor={'rgba(114, 130, 190, 1)'}
            rightNumber={null}
            title={item?.tickers}
            rightIcon={<AntDesign name="right" size={10} color={'rgba(114, 134, 190, 1)'}/>}
            leftIcon={<Fontisto name="apple" size={12} color={'rgba(0, 0, 0, 0.8)'}/>}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.grey0,
      borderRadius: 4,
      paddingHorizontal: WP('2'),
      paddingBottom: WP('2')
   },
   header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: WP('3'),

   },
   profileNIContainer: {
      flexDirection: 'row',
      alignItems: 'center'
   },
   name: {
      color: colors.black,
      marginLeft: WP('2'),
      fontWeight: 'bold',
      fontSize: size.small,
      width: WP('40')
   },
   date: {
      color: colors.grey1,
      marginLeft: WP('2'),
      fontSize: size.xxsmall
   },
   tagContainer: {
      marginTop: WP('2'),
      flexDirection: 'row'
   },
   marginLeft: {
      marginLeft: WP('3')
   },
   reasonStyle: {
      color: colors.grey1,
      fontWeight: 'bold',
      marginVertical: WP('3'),
      fontSize: size.small,
      opacity: 0.7
   },
   reasonText: {
      color: colors.black,
      fontSize: size.small,
      fontWeight: '400'
   },
   tickerIcon: {
      marginTop: 0
   }

});
