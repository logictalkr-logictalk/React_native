import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button,TextInput} from 'react-native';
import { Value } from 'react-native-reanimated';

export default function App() {
  const [name,setname]=useState([
    {      name:'jani',key:'1'    },
    {      name:'ram',key:'2'    },
    {      name:'jani ram',key:'3'    },
    {      name:'janaki',key:'4'    },
    {      name:'janu',key:'5'    },
  ])
  

  const clickhandler=()=>{
    setname('janaki ramaiah')
    setage('27')
  }
  
  return (
    <View style={styles.container}>
      { 
        name.map((item) =>{
          return(
            <View key={item.key}>
              <Text styles={styles.header}>{item.name}</Text>
            </View>
          )
        })
      }
      
       
      
      
     
     
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor:'pink',
    padding:20,
    marginTop:24
    
  }
 
  
  
});
 