import React, {useEffect, useState} from "react";
import {Text, View, FlatList, ActivityIndicator, RefreshControl} from "react-native";
import styles from "./styles";
import {Avatar} from 'react-native-elements';
import {useDispatch} from "react-redux";
import {getIdeas} from "../../../redux/actions/ideas-action";
import {IdeaCard} from "../../../components/IdeaCard";
import {colors} from "../../../utilities";

const Ideas = () => {
   const dispatch = useDispatch();
   const [moreLoader, setMoreLoader] = useState(false)
   const [reFreshLoader, setReFreshLoader] = useState(false)
   const [pages, setPages] = useState(1)
   const [data, setDate] = useState(null);

   useEffect(() => {
      if (!data) {
         handleRequest(setMoreLoader)
      }
   }, [])

   const handleRequest = (loaderHandler, page = pages) => {
      loaderHandler(true);
      const cbSuccess = (response) => {
         if (page === 1) {
            setDate(response);
         } else {
            let prevData = data?.data;
            setDate({
               ...response,
               data: prevData?.concat(response.data)
            });
         }
         loaderHandler(false);
      }
      const cbFailure = (error) => {
         loaderHandler(false);
         alert('Failed to load ideas')
      }
      dispatch(getIdeas(page, cbSuccess, cbFailure));
      setPages(page + 1)
   }
   const _renderAvatar = (item, index) => {
      return (<Avatar
         rounded
         size={47}
         source={{
            uri:
               'https://picsum.photos/seed/picsum/200/200',
         }}
         containerStyle={[styles.traderAvatar, {left: -15 * index}]}
      />);
   }
   const _renderTradersImages = () => {
      return (
         <View style={styles.traderProfileContainer}>
            {
               data?.data?.slice(0, 5).map(_renderAvatar)
            }
         </View>
      );
   }
   const _renderFooter = () => {
      return (
         <View
            style={styles.listFooter}>
            {moreLoader && (
               <ActivityIndicator size={'small'} color={colors.primary}/>
            )}
         </View>
      );
   };
   const _renderItem = ({item}) => {
      return <IdeaCard item={item} containerStyle={styles.ideaCard}/>;
   }

   const _renderList = () => {
      if (!data?.data && !moreLoader) {
         return (
            <Text style={[styles.bodyTitle, styles.noData]}>No Ideas found</Text>
         );
      } else {
         return (
            <FlatList
               data={data?.data}
               extraData={data?.data}
               renderItem={_renderItem}
               keyExtractor={(item) => item.id}
               showsVerticalScrollIndicator={false}
               onEndReached={() => {
                  if (pages < data?.meta?.last_page) {
                     handleRequest(setMoreLoader, pages);
                  }
               }}
               onEndReachedThreshold={0.3}
               ListFooterComponent={_renderFooter}
               refreshControl={
                  <RefreshControl
                     refreshing={reFreshLoader}
                     onRefresh={() => handleRequest(setReFreshLoader, 1)}
                     tintColor={colors.primary}
                  />
               }
            />
         );
      }
   }

   const _renderTradeCount = () => {
      if (data?.data?.length > 0) {
         return (
            <Text
               style={styles.tradersCount}>
               {data?.data?.length > 5 ? '+ ' +
                  data?.data?.length - 5 + 'other popular traders' : data?.data?.length +
                  ' popular traders'}
            </Text>
         );
      }
   }
   return (
      <View style={styles.container}>
         <View style={styles.headerContainer}>
            <Text style={styles.heading}>BREAKING TRADING IDEAS</Text>
            <Text style={styles.subHeading}>Check back regularly for
               <Text style={styles.bold}> real </Text>
               ideas from some of the best traders in the world</Text>
            {_renderTradersImages()}
            {_renderTradeCount()}
         </View>
         <View style={styles.body}>
            <Text style={styles.bodyTitle}>LATEST IDEAS</Text>
            {_renderList()}
         </View>
      </View>
   );
};

export default Ideas;
