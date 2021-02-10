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
     Chirstopher Afton
     </Text>
     <Text> 
     Chirstopher Afton is the youngest of the Afton Kids. He was tormented by his brother Micheal and his friends Simon,Fredrick,and Sammy. On Chirstopher's 7th birthday, the Tormentors pulled a prank on him by puting Chris into Fredbear's mouth. The springlocks were loose and Chris was dead. Many years later, Chris exscaped heaven and became Shadow Freddy.
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
