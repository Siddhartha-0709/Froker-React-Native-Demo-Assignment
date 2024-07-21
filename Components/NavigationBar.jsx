/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Camera, CirclePlus, Home, Search, User } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const NavigationBar = () => {
    const navigation = useNavigation();
    const handleHomePressed = () => {
        console.log('home pressed');
        navigation.navigate('Home');
    };
    const handleProfilePressed = () => {
        console.log('Profile pressed');
        navigation.navigate('Profile');
    };
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                paddingTop: 10,
                height: 50,
                backgroundColor: '#FFFFFF'
            }}>
            <TouchableOpacity
                style={{ height: 40, width: 'auto' }}
                onPress={handleHomePressed}>
                <Home size={30} color={'#8576FF'} />
            </TouchableOpacity>
            <TouchableOpacity
                style={{ height: 40, width: 'auto' }}>
                <Search size={30} color={'#8576FF'} />
            </TouchableOpacity>
            <TouchableOpacity
                style={{ height: 40, width: 'auto' }}>
                <CirclePlus size={30} color={'#8576FF'} />
            </TouchableOpacity>
            <TouchableOpacity
                style={{ height: 40, width: 'auto' }}>
                <Camera size={30} color={'#8576FF'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleProfilePressed}
                style={{ height: 40, width: 'auto' }}>
                <User size={30} color={'#8576FF'} />
            </TouchableOpacity>
        </View>
    );
};

export default NavigationBar;

const styles = StyleSheet.create({});
