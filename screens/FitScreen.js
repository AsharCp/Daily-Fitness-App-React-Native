import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FitnessItems } from '../Context';

const FitScreen = () => {
    const route = useRoute();
    //console.log(route.params);
    const [index,setIndex] = useState(0);
    const exercises = route.params.exercises;
    const current = exercises[index];
    const navigation = useNavigation();
    const {completed,setCompleted,workout,setWorkout,minuts,setMinuts,calories,setCalories} = useContext(FitnessItems);
  return (
    <SafeAreaView>
        <Image style={{width:'100%',height:370}} source={{uri:current.image}}/>
        <Text style={{marginRight:'auto',marginLeft:'auto',marginTop:30,fontSize:30,fontWeight:'bold'}}>{current.name}</Text>
        <Text style={{marginRight:'auto',marginLeft:'auto',marginTop:30,fontSize:38,fontWeight:'bold'}}>x{current.sets}</Text>
        {index+1>=exercises.length?
         (
            <Pressable 
            onPress={()=>{
                navigation.navigate("Home")
            }}
            style={{backgroundColor:'blue',marginLeft:'auto',marginRight:'auto',padding:6,marginTop:20,borderRadius:25}}>
            <Text style={{color:'white',width:120,textAlign:'center',fontSize:30,fontWeight:'bold'}}>Done</Text>
        </Pressable>
         )
        :(
        <Pressable 
            onPress={()=>{
                navigation.navigate("Rest")
                setCompleted([...completed,current.name]);
                setWorkout(workout+1);
                setCalories(calories+6.3);
                setMinuts(minuts+2.5);
                setTimeout(()=>{
                    setIndex(index+1)
                })

            }}
            style={{backgroundColor:'blue',marginLeft:'auto',marginRight:'auto',padding:6,marginTop:20,borderRadius:25}}>
            <Text style={{color:'white',width:120,textAlign:'center',fontSize:30,fontWeight:'bold'}}>Done</Text>
        </Pressable>)
        }
        
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',gap:60}}>
                <Pressable 
                    disabled={index===0}
                    onPress={()=>{
                        navigation.navigate("Rest");
                        setTimeout(()=>{
                            setIndex(index-1)
                        },2000)

                    }}
                    style={{backgroundColor:'green',padding:8,marginTop:30,borderRadius:20}}>
                    <Text style={{color:'white',width:100,textAlign:'center',fontSize:18,fontWeight:'bold'}}>PREV</Text>
                </Pressable>
                {index+1>=exercises.length?
                (
                    <Pressable 
                    onPress={()=>{
                    navigation.navigate("Home")
                    }}
                    style={{backgroundColor:'blue',marginLeft:'auto',marginRight:'auto',padding:6,marginTop:20,borderRadius:25}}>
                    <Text style={{color:'white',width:120,textAlign:'center',fontSize:30,fontWeight:'bold'}}>Done</Text>
                    </Pressable>

                )
                :
                (
                    <Pressable 
                    onPress={()=>{
                        navigation.navigate("Rest")
                        setTimeout(()=>{
                            setIndex(index+1)
                        })
        
                    }}
                    style={{backgroundColor:'green',padding:8,marginTop:30,borderRadius:20}}>
                    <Text style={{color:'white',width:100,textAlign:'center',fontSize:18,fontWeight:'bold'}}>SKIP</Text>
                </Pressable>
                )
                }
                
            </View>
    </SafeAreaView>
  )
}

export default FitScreen

const styles = StyleSheet.create({})