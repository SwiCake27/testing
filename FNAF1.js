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
FNAF 1
     </Text>
     <Text> 
     Freddy, Chica, Bonnie, Foxy, Puppet, and Golden Freddy make up the FNAF 1 animatronic. They were built by Henry Emily and William Afton. After Chris, Liz, and Clara died, William Afton killed 6 children and trapped their souls into the FNAF 1 animatronics.
     </Text>
        <Text>Gabriel/Freddy</Text>
          <Text>Susie/Chica</Text>
            <Text>Jeremy/Bonnie</Text>
              <Text>Fritz/Foxy</Text>
                <Text>Charlotte/Puppet</Text>
                  <Text>Cassidy/Golden Freddy</Text>
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
