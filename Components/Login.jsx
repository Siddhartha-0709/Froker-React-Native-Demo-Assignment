/* eslint-disable jsx-quotes */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Lock, User } from 'lucide-react-native'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation = useNavigation();
    const handleLogin=()=>{
        navigation.navigate('Home');
    }
    const handleSignup=()=>{
        navigation.navigate('Signup');
    }
  return (
    <SafeAreaView>
        <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
        <LinearGradient colors={['#FFFFFF', '#8576FF']} style={{height:'100%'}}  start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}} locations={[0,0.5]}>
            <ScrollView>

                <Text style={{ fontFamily: 'Pacifico-Regular', fontSize: 40, color: '#000000', textAlign: 'center', marginTop: 170 }}>Tinkerly</Text>
                <Text style={{ fontFamily: 'Pacifico-Regular', fontSize: 18, color: '#000000', textAlign: 'center', marginTop: 1 }}>Your space for innovation and creativity!</Text>
                <View style={{backgroundColor:'#FFFFFF', height:280, width:280, borderRadius:20, marginLeft:'auto', marginRight:'auto', marginTop:30, elevation:5, justifyContent:'center'}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin:4,marginTop:30 }}>
                        <User size={25} color={'#8576FF'} style={{borderRadius:30, marginTop:'auto', marginBottom:'auto',marginRight:5}} />
                        <TextInput style={{ height: 40, width: '85%', backgroundColor: '#F0F3FF', borderRadius: 10,color:'#000000', fontWeight:'700',fontSize:15, padding:3 }} placeholder='Username or Email' placeholderTextColor={'#758694'}/>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin:4 }}>
                        <Lock size={25} color={'#8576FF'} style={{ borderRadius:30, marginTop:'auto', marginBottom:'auto',marginRight:5}} />
                        <TextInput style={{ height: 40, width: '85%', backgroundColor: '#F0F3FF', borderRadius: 10, color:'#000000', fontWeight:'700',fontSize:15, padding:3 }} placeholder='Password' placeholderTextColor={'#758694'} secureTextEntry/>
                    </View>
                    <TouchableOpacity style={{ height: 40, width: '50%', backgroundColor: '#8576FF', borderRadius: 40, marginTop: 30, justifyContent: 'center', alignItems: 'center', marginLeft:'auto',marginRight:'auto', elevation:4 }}
                    onPress={handleLogin}>
                        <Text style={{color:'#FFFFFF', fontWeight:'600'}}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:'40'}}>
                        <Text style={{color:'#8567FF', textAlign:'center', fontWeight:'500', marginTop:40}}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'#FFFFFF', height:60, width:280, borderRadius:20, marginLeft:'auto', marginTop:10, marginRight:'auto', paddingTop:'auto', elevation:5, justifyContent:'center', paddingBottom:'auto'}}>
                    <TouchableOpacity style={{ flexDirection:'row', marginLeft:'auto', marginRight:'auto'}} onPress={handleSignup}>
                        <Text style={{color:'#000000', textAlign:'center', fontWeight:'500', marginTop:0}}>Don't have an account?</Text>
                        <Text style={{color:'#8567FF', textAlign:'center', fontWeight:'500', marginTop:0}}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </LinearGradient>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})