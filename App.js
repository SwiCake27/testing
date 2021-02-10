import * as React from 'react';
import { View } from 'react-native';
import Homescreen from './components/Home'
import CC from './Aftons/CC'
import FNAF1 from './Aftons/FNAF1'

import {createAppContainer, createSwitchNavigator} from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
      <View>
       <AppContainer/>
      </View>
    );
  }
}
var AppNavigator=createSwitchNavigator( {
  Homescreen:Homescreen,CC:CC,FNAF1:FNAF1
})
const AppContainer = createAppContainer(AppNavigator)