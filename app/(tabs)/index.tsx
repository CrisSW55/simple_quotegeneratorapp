import { Image, StyleSheet,Button, Text,View,Pressable } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { quoteList } from '@/components/quotedata.js';

import { Stack } from 'expo-router';
import { useState } from 'react';

export default function HomeScreen() {
  const [index, setIndex] = useState(0);
  const [clicks, setClicks] = useState(0);
  let quotedata = quoteList[index];
  let previous = -1;
  let current = index;
  
  function handleClick() {
    // setClicks(clicks + 1);
    do {
    current = Math.floor(Math.random()*4)
  
    } while (previous == current);

    if(previous != current){
      setIndex(current)
      previous = current
    }
    
    
    
  }
  return (
    
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/sunrisepainting.jpg')}
          style={{justifyContent:"center", alignItems: 'center', height: '100%', width: '100%'}}
        />
      }
      >
       
        
      
    
 

  
      <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">Motivational Quotes</ThemedText>
      
      
      </ThemedView>
      

      <View style={{ justifyContent:'center',alignItems:'center',height: 400, marginTop: 10}}>
      <Pressable  
          onPress={handleClick}
          style={styles.myButton}
        >
          <Text style={styles.buttonText}>Random Motivational Quote!</Text>
        </Pressable>
        <Text style={styles.quoteText}>{quotedata.quote}</Text>
        </View>
    
       
        {/* <Text style={{color:'purple'}}>Current index is: {index}</Text>
        <Text style={{color:'purple'}}>Number of clicks made: {clicks}</Text> */}
      
        
          
      
     </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    // borderColor:'green',borderWidth: 0.5
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  myButton: {
    height: 100,
    width: 150,
    backgroundColor: '#d13708',
    justifyContent:'center',
    alignItems: 'center',
    borderColor:'#fca103',
    borderWidth:1,
    borderRadius: 50,
    padding: 10,
    
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  quoteText: {
    height: 250,
    width: 250,
    marginTop: 20,
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#ffdd40',
    justifyContent:'center',
    alignItems: 'center',
  }
});
