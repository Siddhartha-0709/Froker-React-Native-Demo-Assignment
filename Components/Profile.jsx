/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import PostView from './PostView'
import { Bell, Heart, MessageSquare } from 'lucide-react-native'
import NavigationBar from './NavigationBar'
import LinearGradient from 'react-native-linear-gradient'

const Profile = () => {
  const userPosts = [
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
    <>
      <SafeAreaView style={{ backgroundColor: '#FFFFFF', height: '100%', padding: 5 }}>
        <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
        <View style={{ height: 50, width: '100%', backgroundColor: '#FFFFFF', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontFamily: 'Pacifico-Regular', fontSize: 25, color: '#8576FF' }}>Tinkerly</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Bell size={30} color={'#8576FF'} style={{ marginLeft: 10 }} />
            {/* <MessageSquare size={30} color={'#000000'} style={{ marginLeft: 10 }} /> */}
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <LinearGradient colors={['#FFFFFF', '#8576FF']} style={{height:210, width:210,padding:5, borderRadius:120, alignSelf:'center'}}  start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}} locations={[0,1.5]}>
            <Image source={{ uri: 'https://images.pexels.com/photos/27291755/pexels-photo-27291755/free-photo-of-siddhartha-mukherjee-kiit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' }}
              style={{ height: 200, width: 200, borderRadius: 100, aspectRatio: 1 / 1, alignSelf: 'center' }}
            />
          </LinearGradient>
          <Text style={{ fontSize: 20, color: '#000000', fontWeight: '900', textAlign: 'center', marginTop: 10 }}>@sidd_myself</Text>
          <Text style={{ fontSize: 18, color: '#000000', fontWeight: '600', textAlign: 'center', marginTop: 4 }}>Siddhartha Mukherjee</Text>
          <Text style={{ fontSize: 15, color: '#8576FF', fontWeight: '300', textAlign: 'center', marginTop: 4 }}>Young Learner | Software Developer | India</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <View>
            <Text style={{ fontSize: 20, color: '#000000', fontWeight: '600', textAlign: 'center', marginTop: 10 }}>10</Text>
            <Text style={{ fontSize: 15, color: '#8576FF', fontWeight: '500', textAlign: 'center', marginTop:0 }}>posts</Text>
          </View>
          <View>
            <Text style={{ fontSize: 20, color: '#000000', fontWeight: '600', textAlign: 'center', marginTop: 10 }}>312</Text>
            <Text style={{ fontSize: 15, color: '#8576FF', fontWeight: '500', textAlign: 'center', marginTop:0 }}>followers</Text>
          </View>
          <View>
            <Text style={{ fontSize: 20, color: '#000000', fontWeight: '600', textAlign: 'center', marginTop: 10 }}>40</Text>
            <Text style={{ fontSize: 15, color: '#8576FF', fontWeight: '500', textAlign: 'center', marginTop:0 }}>following</Text>
          </View>
        </View>
        <PostView userPosts={userPosts} />
        <NavigationBar/>
      </SafeAreaView>
    </>
  )
}

export default Profile

const styles = StyleSheet.create({})