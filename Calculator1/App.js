import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Alert } from 'react-native';

const App = () => {
  
  const [value1, onChangeText1] = React.useState('0');
  const [value2, onChangeText2] = React.useState('0');
  const [value3, onButtonPress] = React.useState('Result: ?');

  return (
    <View style={styles.container1}>
      <Text>{value3}</Text>

      <TextInput
      style={styles.container2}
      onChangeText={text => onChangeText1(text)}
      value={value1}
      />
      <TextInput
      style={styles.container2}
      onChangeText={text => onChangeText2(text)}
      value={value2}
      />
      <Button
      style={styles.container3}
      title="+"
      onPress={() => onButtonPress("Result: " + (parseInt(value1) + parseInt(value2)))}      
      />
      <Button
      style={styles.container3}
      title="--"
      onPress={() => onButtonPress("Result: " + (parseInt(value1) - parseInt(value2)))}    
      />

    </View>
  );
}


const styles = StyleSheet.create({
  container1: {   
    flex: 1, 
    paddingTop: 50,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  container2: {   
    borderWidth: 1,
    marginBottom: 10,
    width: 150,
  },
  container3: {  
    flexDirection: 'row',
  },
});

export default App;