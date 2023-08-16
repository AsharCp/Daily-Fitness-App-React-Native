import { Image, StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FitnessCard from '../components/FitnessCard'

const HomeScreen = () => {
  return (
    <ScrollView style={{marginTop:30}}>
        <View style={{backgroundColor:'#CD853F',width:'100%',height:200,padding:10,}}>
        <Text style={{color:'#fff',fontWeight:'bold',fontSize:18}}>HOME WORKOUT</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:20}}>
            <View>
                <Text style={styles.numberstyle}>0</Text>
                <Text style={styles.textstyle}>WORKOUT</Text>
            </View>
            <View>
            <Text style={styles.numberstyle}>0</Text>
                <Text style={styles.textstyle}>KCAL</Text>  
            </View>
            <View>
                <Text style={styles.numberstyle}>0</Text>
                <Text style={styles.textstyle}>MINS</Text>   
            </View>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
           <Image style={{width:'90%',height:120,borderRadius:7,marginTop:20}} source={{uri:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png"}}/>
        </View>
        </View>
        <FitnessCard/>
        
    </ScrollView>

  );
};

export default HomeScreen

const styles = StyleSheet.create({
    numberstyle:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center'
    },
    textstyle:{
        color:'D0D0D0',
        marginTop:6,
        fontSize:17
    }
})