import {StyleSheet} from "react-native";
import {HP, size, WP, colors} from "../../../utilities";

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   headerContainer: {
      flex: 0.32,
      backgroundColor: colors.primary,
      paddingHorizontal: WP('5')
   },
   heading: {
      color: colors.lightPrimary,
      fontWeight: '800',
      fontSize: size.h4,
      marginTop: HP('3'),
      opacity: 0.9
   },
   subHeading: {
      color: colors.lightPrimary,
      fontSize: size.medium,
      marginTop: HP('1'),
      opacity: 0.8
   },
   bold: {
      fontWeight: 'bold'
   },
   traderProfileContainer: {
      flexDirection: 'row',
      height: HP('8'),
      marginTop: HP('2.5'),
      paddingLeft: WP('3')
   },
   traderAvatar: {
      borderWidth: 1.5,
      borderColor: colors.black
   },
   imageOverlap: {
      left: -15
   },
   tradersCount: {
      color: colors.lightPrimary,
      fontSize: size.small,
      opacity: 0.7
   },
   body: {
      flex: 0.68,
      backgroundColor: colors.lightPrimary,
      paddingHorizontal: WP('5')
   },
   bodyTitle: {
      color: colors.primary,
      fontWeight: 'bold',
      fontSize: size.xxlarge,
      marginVertical: HP('3'),
   },
   noData: {
      alignSelf: 'center',
      marginTop: HP('30')
   },
   ideaCard: {
      marginTop: WP('2')
   },
   listFooter: {
      width: WP('100'),
      height: WP(20),
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: WP(2),
   }

});

export default styles;
