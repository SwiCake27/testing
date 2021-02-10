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
     Clara Afton
     </Text>
     <Text> 
     Clara Schmidt was Willam and Henry's childhood friend who later married William and had 4 children. After Liz's death, Clara went for a ride in her car to clear her head but accidently drove of a cliff. William was devastated and tried to put her soul into Ballora He gave up, thinking all was lost, but 2 days later, it worked. 
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
