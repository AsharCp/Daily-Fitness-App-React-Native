import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

const FitScreen = () => {
    const route = useRoute();
    //console.log(route.params);
    const [index,setIndex] = useState(0);
    const exercises = route.params.exercises;
    const current = exercises[index];
  return (
    <SafeAreaView>
        <Image style={{width:'100%',height:370}} source={{uri:current.image}}/>
        <Text style={{marginRight:'auto',marginLeft:'auto',marginTop:30,fontSize:30,fontWeight:'bold'}}>{current.name}</Text>
        <Text style={{marginRight:'auto',marginLeft:'auto',marginTop:30,fontSize:38,fontWeight:'bold'}}>x{current.sets}</Text>
        <Pressable style={{backgroundColor:'blue',marginLeft:'auto',marginRight:'auto',padding:8,marginTop:30,borderRadius:6}}>
            <Text style={{color:'white',width:120,textAlign:'center',fontSize:30,fontWeight:'bold'}}>Done</Text>
        </Pressable>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',gap:60}}>
                <Pressable style={{backgroundColor:'green',padding:8,marginTop:30,borderRadius:6}}>
                    <Text style={{color:'white',width:70,textAlign:'center',fontSize:18,fontWeight:'bold'}}>PREV</Text>
                </Pressable>
                <Pressable style={{backgroundColor:'green',padding:8,marginTop:30,borderRadius:6}}>
                    <Text style={{color:'white',width:70,textAlign:'center',fontSize:18,fontWeight:'bold'}}>SKIP</Text>
                </Pressable>
            </View>
    </SafeAreaView>
  )
}

export default FitScreen

const styles = StyleSheet.create({})