/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import NavigationBar from './NavigationBar'
import { Bookmark, CirclePlus, Cross, EllipsisVertical, Heart, MessageCircle, MessageSquare, Music, Plus, Send, X } from 'lucide-react-native'

const Home = () => {
    const suggestedAccounts = [
        {
            imageUrl: 'https://images.pexels.com/photos/18681382/pexels-photo-18681382/free-photo-of-coding.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            username: 'Hitesh'
        },
        {
            imageUrl: 'https://images.pexels.com/photos/2036656/pexels-photo-2036656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            username: 'Shaksham'
        },
        {
            imageUrl: 'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600',
            username: 'John'
        },
        {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2aFL8IiUljNsf7oPODATw1FOjE-Gb4iMuaA&s',
            username: 'Arijit'
        },
        {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC526aAbQRGiL9SDc_rM3KmxTscrwKaJQ1ow&s',
            username: 'Shreya'
        },
        {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCeSTT3Dtrm4FT_mecUmW0ks0Uml6MDDtqiA&s',
            username: 'Apple'
        },
        {
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png',
            username: 'Microsoft'
        },
        {
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png',
            username: 'Google'
        }];
    const storyProfiles = [
        {
            imageUrl: 'https://images.pexels.com/photos/27291755/pexels-photo-27291755/free-photo-of-siddhartha-mukherjee-kiit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            username: 'Your Story'
        },
        {
            imageUrl: 'https://images.pexels.com/photos/18681382/pexels-photo-18681382/free-photo-of-coding.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            username: 'Hitesh'
        },
        {
            imageUrl: 'https://images.pexels.com/photos/2036656/pexels-photo-2036656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            username: 'Shaksham'
        },
        {
            imageUrl: 'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600',
            username: 'John'
        },
        {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2aFL8IiUljNsf7oPODATw1FOjE-Gb4iMuaA&s',
            username: 'Arijit'
        },
        {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC526aAbQRGiL9SDc_rM3KmxTscrwKaJQ1ow&s',
            username: 'Shreya'
        },
        {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCeSTT3Dtrm4FT_mecUmW0ks0Uml6MDDtqiA&s',
            username: 'Apple'
        },
        {
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png',
            username: 'Microsoft'
        },
        {
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png',
            username: 'Google'
        },
    ]
    const posts = [
        {
            imageUrl: 'https://images.pexels.com/photos/27291734/pexels-photo-27291734/free-photo-of-hack4bengal-siddhartha-mukherjee-team-alooposto.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            username: 'Siddhartha Mukherjee',
            profilePicUrl: 'https://images.pexels.com/photos/27291755/pexels-photo-27291755/free-photo-of-siddhartha-mukherjee-kiit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            liked: true,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
            aspectRatio: '4',
            music: {
                name: 'Hall of Fame (Will I am)',
                url: 'https://www.youtube.com/watch?v=0xJX5Zm5dE8'
            },
        },
        {
            imageUrl: 'https://images.pexels.com/photos/18681382/pexels-photo-18681382/free-photo-of-coding.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            username: 'Hitesh Choudhary',
            profilePicUrl: 'https://images.pexels.com/photos/18681382/pexels-photo-18681382/free-photo-of-coding.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            liked: true,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
            music: {
                name: 'O Saajni Re (Arijit Singh, Pritam)',
                url: 'https://www.youtube.com/watch?v=0xJX5Zm5dE8'
            },
            aspectRatio: '4'
        },
        {
            imageUrl: 'https://images.pexels.com/photos/25583753/pexels-photo-25583753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            username: 'Shaksham Choudhary',
            profilePicUrl: 'https://images.pexels.com/photos/2036656/pexels-photo-2036656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            liked: false,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        },
        {
            imageUrl: 'https://images.pexels.com/photos/25583761/pexels-photo-25583761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            username: 'Hitesh Choudhary',
            profilePicUrl: 'https://images.pexels.com/photos/18681382/pexels-photo-18681382/free-photo-of-coding.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            liked: false,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
            music: {
                name: 'Colors of the Sky (Tailor Swift)',
                url: 'https://www.youtube.com/watch?v=0xJX5Zm5dE8'
            },
            aspectRatio: '4'
        },
        
    ]
    return (
        <SafeAreaView >
            <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
            <View style={{ height: '94%', width: '100%', paddingLeft: 4, paddingRight: 4 }}>
                <View style={{ height: 50, width: '100%', backgroundColor: '#FFFFFF', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Pacifico-Regular', fontSize: 25, color: '#8576FF' }}>Tinkerly</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Heart size={30} color={'#8576FF'} style={{ marginLeft: 10 }} />
                        <MessageSquare size={30} color={'#8576FF'} style={{ marginLeft: 10 }} />
                    </View>
                </View>
                <View style={{ height: 90, width: '100%', backgroundColor: '#FFFFFF' }}>
                    <ScrollView horizontal>
                        {
                            storyProfiles.map((storyProfile, index) => {
                                return (
                                    <TouchableOpacity key={index} style={{ height: 70, width: 70, backgroundColor: '#FFFFFF', borderRadius: 50, margin: 2 }}>
                                        <Image style={{ aspectRatio: 1 / 1, borderRadius: 70, height: 70, width: 45 }} source={{ uri: storyProfile.imageUrl }} />
                                        <Text style={{ textAlign: 'center', fontSize: 12, color: '#000000' }}>{storyProfile.username}</Text>
                                        {index === 0 ? (
                                            <View style={{ position: 'absolute', top: 50, right: 0, backgroundColor: '#3014ff', borderRadius: 50 }}>
                                                <Plus size={20} color={'#FFFFFF'} />
                                            </View>
                                        ) : null}
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </ScrollView>
                </View>
                <ScrollView>
                    <Text style={{fontSize:15, color:'#8576FF', fontWeight:'600', marginLeft:5, marginTop:10, marginBottom:10}}>Suggested Accounts</Text>
                    <ScrollView style={{ width: '100%', height: 200, marginLeft:5, marginRight:5 }} horizontal>
                        {suggestedAccounts.map((suggestedAccount, index) => (
                            <View key={index} style={{ backgroundColor: '#FFFFFF', height: 180, width: 150, margin: 5, borderRadius: 10 }}>
                                <TouchableOpacity>
                                    <X size={20} color={'#000000'} style={{ marginLeft: 'auto', marginRight:10, marginTop: 10 }}/>
                                </TouchableOpacity>
                                <Image style={{ aspectRatio: 1 / 1, borderRadius: 100, height:80, marginLeft: 'auto', marginRight: 'auto', marginTop: 0 }} source={{ uri: suggestedAccount.imageUrl }} />
                                <Text style={{ textAlign: 'center', fontSize: 15, color: '#000000', fontWeight:'800' }}>{suggestedAccount.username}</Text>
                                <TouchableOpacity style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 10, backgroundColor: '#3FA2F6', borderRadius: 10, width:100, padding:5 }}>
                                    <Text style={{textAlign:'center', color:'#FFFFFF'}}>Follow</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </ScrollView>
                    {
                        posts.map((post, index) => {
                            return (
                                <>
                                    <View key={index} style={{ padding: 5, backgroundColor: '#FFFFFF', borderRadius: 10 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 3 }}>
                                            <Image style={{ borderRadius: 50, height: 45, width: 45 }} source={{ uri: post.profilePicUrl }} />
                                            <View style={{ marginLeft: 4 }}>
                                                <Text style={{ color: 'black', fontSize: 15, fontWeight: '800', marginLeft: 3 }}>{post.username}</Text>
                                                {post.music ? (<View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Music size={12} color={'black'} />
                                                    <Text style={{ color: 'black', fontSize: 12, fontWeight: '400', marginLeft: 3 }}>{post.music?.name}</Text>
                                                </View>) : null}
                                            </View>
                                            <TouchableOpacity style={{ marginLeft: 'auto', marginRight: 0 }}>
                                                <EllipsisVertical size={25} color={'black'} />
                                            </TouchableOpacity>
                                        </View>
                                        <Image style={{ aspectRatio: post.aspectRatio === '4' ? 4 / 3 : 1 / 1, borderRadius: 10 }} source={{ uri: post.imageUrl }} />
                                        <View style={{ flexDirection: 'row', padding: 4 }}>
                                            <TouchableOpacity style={{ marginRight: 10 }}>
                                                {post.liked ? <Heart size={25} color={'red'} /> : <Heart size={25} color={'black'} />}
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ marginLeft: 10, marginRight: 10 }}>
                                                <MessageCircle size={25} color={'black'} />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ marginLeft: 10, marginRight: 10 }}>
                                                <Send size={25} color={'black'} />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ marginLeft: 240, marginRight: 10 }}>
                                                <Bookmark size={25} color={'black'} />
                                            </TouchableOpacity>
                                        </View>
                                        <Text style={{ color: 'black', fontSize: 13, fontWeight: '400', marginLeft: 3 }}>{post.description}</Text>
                                    </View>
                                </>
                            );

                        })

                    }
                </ScrollView>
            </View>
            <NavigationBar />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})