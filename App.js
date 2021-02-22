import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {MaterialCommunityIcons,AntDesign,Ionicons} from '@expo/vector-icons'
import {ScrollView} from 'react-native-gesture-handler'



const colors = {
  themeColor:"#4263ec",
  background:"#f4f6fc",
  greyish:"#d4cfc1",
  tint:"#2b49c3",
  white:"#fff"
}

const tasks = [
  {
    task:"How are you doing",
    icon:"person",
    theme:"#008b8b",
    stamp:"Today . 8pm"
  },
  {
    task:"How are you doing",
    icon:"cart",
    theme:"#008b8b",
    stamp:"Today . 8pm"
  },
  {
    task:"Morning walk",
    icon:"person",
    theme:"#008b8b",
    stamp:"Today . 8pm"
  },
  {
    task:"Morning walk",
    icon:"hike",
    theme:"#008b8b",
    stamp:"Today . 8pm"
  },  
]

const Tasks = ({task, icon, theme, stamp}) =>{
  return( 
    <View style={styles.profile}>
      <View >
      <Ionicons name="person" size={30} style={{color:theme}}/>
      </View>
      <View>
        <Text style={{fontSize: 16, marginHorizontal: 10}}>{task}</Text>
        <Text style = {styles.stampStyle}>{stamp}</Text>
      </View>
    </View>
  )
}
export default function App() {
  return (
    <View style={styles.mainContainer}>
      {/* <Text>Open up App.js t start working on your app!</Text> */}
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor}/>
      <View style={{backgroundColor:colors.themeColor}}>
        <View style={{padding:16,flexDirection:"row",justifyContent:"space-between"}}>
          <MaterialCommunityIcons name="text" size={30} style={{color:colors.white}}/>
          <View style={{flexDirection:'row',}}>
          <MaterialCommunityIcons name="bell-outline" size={30} style={{color:colors.white}}/>
          <AntDesign name="user" size={30} style={{color:colors.white}}/> 
          
          </View>
        </View>
        <View style={{padding:16}}>
        <Text style={{color:colors.white, fontSize:30}}>{"Hello,\nMacvil"}</Text>
        </View>
        <View style={{paddingHorizontal:16,paddingVertical:6,flexDirection:"row",justifyContent:"", backgroundColor:colors.tint,borderRadius:20, marginVertical:20,alignItems:"center"}}>
        <MaterialCommunityIcons name="magnify" size={30} style={{color:colors.white}}/>
        <TextInput placeholder="Search"   style={{paddingVertical:6,width:400, color:colors.white}}/>

        </View>
        
       
      </View>
      
      <ScrollView style={{backgroundColor: colors.background}}>
        {tasks.map(task => 
          <Tasks task={task.task} icon={task.icon} theme={task.theme} stamp={task.stamp}/>
        )}
      </ScrollView> 
      
     
    </View>
  ); 
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.themeColor,
    
  },
  profile:{
    backgroundColor:'#fff',
    flexDirection:"row",
    marginHorizontal:16,
    marginVertical:4,
    borderRadius:20,
    paddingVertical:20,
    paddingHorizontal:24
    },

    stampStyle:{
      color: colors.greyish,
      marginHorizontal: 10
    }
});
