import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Fitness from '../data/Fitness'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


const FitnessCard = () => {
    const FitnessData=Fitness;
    const navigation = useNavigation();

  return (
    <View style={{marginTop:67}}>
        {FitnessData.map((item,key)=>(
            
            <Pressable
            onPress={()=>navigation.navigate("Workout",{
              image:item.image,
              exercises:item.excersises,
              id:item.id
            })}
            style={{alignItems:'center',justifyContent:'center',marginTop:10}} key={key}>
                <Image style={{width:'85%',height:130,borderRadius:7}} source={{uri:item.image}}/>
                <Text style={{position:'absolute',color:'#fff',fontSize:18,fontWeight:'bold',top:10,left:40}}>{item.name}</Text>
                <MaterialCommunityIcons style={{position:'absolute',left:40,top:90}} name="lightning-bolt" size={24} color="white" />
                
            </Pressable>
        ))}
      
    </View>
  )
}

export default FitnessCard

const styles = StyleSheet.create({})