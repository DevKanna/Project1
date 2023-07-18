import React from 'react';

import {
View,
Text,
Button,
SafeAreaView
} from 'react-native'

function App(){
  let handlePress = () => false

  return (
   <SafeAreaView>
     <View>
    <Text>
      Wellcome..!
    </Text>
    <Button 
         onPress = {handlePress}
         title = "Red button!"
         color = "blue"
      />

  </View>
   </SafeAreaView>
  )
}
export default App;