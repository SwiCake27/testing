import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class CC extends React.Component {
gotoAnswer=(buzzercolor)=>{
     this.props.navigation.navigate('Homescreen')
   }
  render() {
    return (
     <View>
      <Text> 
    Ennard
     </Text>
     <Text> 
    Noah was a friend of Micheal Afton before Terrence died. One day, Noah was at Sister Location constructon site and found a broken animatronic called Ennard. Noah went near and Ennard killed him. Now Noah is Ennard. Many years later, there's a new nightgaurd. What did he say his name was? Let's auto correct it to Eggs Benedict! 
     </Text>
    <TouchableOpacity
        style={[{backgroundColor:'pink'}]}
          onPress={()=>this.gotoAnswer()}>
        <Text>
Home
</Text>
      </TouchableOpacity>
     </View>
    );
  }
}
