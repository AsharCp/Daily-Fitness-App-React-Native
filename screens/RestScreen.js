import { StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useState,useEffect } from 'react';

const RestScreen= () => {
  let timer=0;
  const navigation = useNavigation();
  const [timeleft, setTimeleft] = useState(3);
  const startTime=()=>{
    setTimeout(()=>{
      if(timeleft<=0){
        navigation.goBack();
        clearTimeout(timer)
      }
      setTimeleft(timeleft-1)
    },1000)
  }
  useEffect(() => {
    startTime();
    return () => {
      clearTimeout(timer);
    }
  }, )
  
  return (
    <SafeAreaView>
      <Image
        // resizeMode="contain"
        source={{
          uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png",}}
        style={{ width: "100%", height: 420 }}/>
        <Text style={{fontSize:30,fontWeight:'bold',textAlign:'center',marginTop:50}}>TAKE A BREAK!</Text>
        <Text style={{fontSize:40,fontWeight:'800',textAlign:'center',marginTop:50}}>{timeleft}</Text>
    </SafeAreaView>
        
  )
}

export default RestScreen


const styles = StyleSheet.create({})