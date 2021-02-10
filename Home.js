 import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class Homescreen extends React.Component {
   gotoST=(buzzercolor)=>{
     this.props.navigation.navigate('Will')
   }
    gotoB=(buzzercolor)=>{
     this.props.navigation.navigate('Clara')
   }
    gotoNF=(buzzercolor)=>{
     this.props.navigation.navigate('Terry')
   }
    gotoEB=(buzzercolor)=>{
     this.props.navigation.navigate('Mike')
   }
   gotoCB=(buzzercolor)=>{
     this.props.navigation.navigate('Eli')
   }
   gotoSF=(buzzercolor)=>{
     this.props.navigation.navigate('CC')
   }
   gotoBS=(buzzercolor)=>{
     this.props.navigation.navigate('EN')
   }
   gotoGT=(buzzercolor)=>{
     this.props.navigation.navigate('Glitch')
   }
   gotoRC=(buzzercolor)=>{
     this.props.navigation.navigate('Mike')
   }
   gotoRC=(buzzercolor)=>{
     this.props.navigation.navigate('Mike')
   }
   gotoNM=(buzzercolor)=>{
     this.props.navigation.navigate('NM')
   }
   gotoMC=(buzzercolor)=>{
     this.props.navigation.navigate('FNAF1')
   }
   
  render() {
    return (
      <View>
      
      <TouchableOpacity
        style={[styles.button,{backgroundColor:'purple'}]}
          onPress={()=>this.gotoRiddle()}>
        <Text
          style={styles.buttonText}>
William
</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button,{backgroundColor:'rgb(40, 169, 255)'}]}
          onPress={()=>this.gotoStars('cyan')}>
        <Text
          style={styles.buttonText}>
Clara        
</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button,{backgroundColor:'blue'}]}
          onPress={()=>this.gotoSunny('lavender')}>
        <Text
          style={[styles.buttonText,{color:'white'}]}>
Terrence
</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button,{backgroundColor:'rgb(165, 118, 255)'}]}
          onPress={()=>this.gotoNews('pink')}>
        <Text
          style={styles.buttonText}>
Micheal        
</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button,{backgroundColor:'red'}]}
          onPress={()=>this.gotoNews('pink')}>
        <Text
          style={styles.buttonText}>
Elizabeth        
</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button,{backgroundColor:'rgb(76,36,145)'}]}
          onPress={()=>this.gotoSF('pink')}>
        <Text
          style={[styles.buttonText,{color:'white'}]}>
Christopher        
</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button,{backgroundColor:'gray'}]}
          onPress={()=>this.gotoBS('pink')}>
        <Text
          style={styles.buttonText}>
Ennard        
</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button,{backgroundColor:'yellow'}]}
          onPress={()=>this.gotoNews('pink')}>
        <Text
          style={styles.buttonText}>
Glitchtrap        
</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button,{backgroundColor:'black'}]}
          onPress={()=>this.gotoNews('pink')}>
        <Text
          style={[styles.buttonText,{color:'white'}]}>
The Nightmares        
</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button,{backgroundColor:'green'}]}
          onPress={()=>this.gotoMC('pink')}>
        <Text
          style={styles.buttonText}>
The Missing Children        
</Text>
      </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    marginLeft: 30,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 50,
    //backgroundColor: 'red',
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});