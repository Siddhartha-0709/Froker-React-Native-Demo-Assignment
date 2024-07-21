/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import CardContainer from './CardContainer'
const PostView = () => {
    const data = [
        {
            image: require('../Components/Images/1.jpg')
        },
        {
            image: require('../Components/Images/2.jpg')
        },
        {
            image: require('../Components/Images/3.jpg')
        },
        {
            image: require('../Components/Images/4.jpg')
        },
        {
            image: require('../Components/Images/5.jpg')
        },
        {
            image: require('../Components/Images/1.jpg')
        },
        {
            image: require('../Components/Images/2.jpg')
        },
        {
            image: require('../Components/Images/3.jpg')
        },
        {
            image: require('../Components/Images/4.jpg')
        },
        {
            image: require('../Components/Images/5.jpg')
        },
    ]
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <SafeAreaView style={{flex:1, backgroundColor:'#FFFFFF', justifyContent: 'center', alignItems: 'center'}}>
        <CardContainer data = {data} maxVisibleItems={4}/>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default PostView

const styles = StyleSheet.create({})