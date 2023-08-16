import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

const WorkoutScreen = () => {
  const route=useRoute();
  const navigation = useNavigation();
  // console.log(route.params);
  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'white',marginTop:35}}>
      <Image style={{width:'100%',height:170}} source={{uri:route.params.image}} />
      <Ionicons onPress={()=>navigation.goBack()}  
      style={{position:'absolute',color:'white',top:10,left:20}} name="arrow-back-outline" size={30} color="black" />
      {route.params.exercises.map((item,index)=>(
        <Pressable style={{margin:10,flexDirection:'row',alignItems:'center'}} key={index}>
          <Image style={{width:90,height:90}} source={{uri:item.image}} />
          <View style={{marginLeft:10}}>
            <Text style={{fontSize:17,fontWeight:'bold'}} >{item.name}</Text>
            <Text style={{color:'gray',fontWeight:'bold'}}>x{item.sets}</Text>
          </View>

        </Pressable>
      ))}
    </ScrollView>
    <Pressable
    onPress={()=>navigation.navigate("Fit",{
      exercises:route.params.exercises
    })} 
    style={{padding:10,backgroundColor:'blue',marginRight:'auto',marginLeft:'auto',marginVertical:20,borderRadius:6,width:120}}>
      <Text style={{textAlign:'center',color:'white',fontWeight:'bold',fontSize:15}}>START</Text>

    </Pressable>
    </>
  )
}

export default WorkoutScreen

const styles = StyleSheet.create({})