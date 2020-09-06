import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 0, random100: Number(Math.floor(Math.random() * 99) + 1), yritys: 1, result: 'Guess a number between 1-100' };
    
  }

  setText(text) {
    this.setState({ text: Number(text) });    
  }

  buttonPressed = (painettu) => {
    const { text, random100, yritys } = this.state;

    this.setState({ yritys: Number(yritys + 1)});

//console.log(yritys);
//console.log(random100);

    if (text === random100) {
      console.log('toimiii');
      this.setState({ result: 'You guessed the number in ' + yritys + ' guesses'});    
      Alert.alert('Numeropeli voitettu onnittelut', 'You guessed the number in ' + yritys + ' guesses');
    } 
    
    else if (text > random100){
      this.setState({ result: 'Your guess ' + text + ' is too high'});
    }
    else if (text < random100) {
      this.setState({ result: 'Your guess ' + text + ' is too low'});
    }

    else {
      this.setState({ result: 'Vain numerot kelpaa 1-100' });
      //console.log(random100);
    }
  };

  render() {
    const { text, random100, yritys, result } = this.state;
    return (
      <View style={styles.container}>
        <Text>{result}</Text>
        <View style={styles.textii}>
          <TextInput
            keyboardType={"Numeric"}
            style={{ width: 200, borderColor: "black", borderWidth: 2 }}
            onChangeText={(text) => this.setText(text)}
            value={`${text}`}
          />                    
        </View>
        <View style={styles.btn}>
          <Button title="MAKE GUESS" onPress={(painettu) => this.buttonPressed(true)} />
        </View>
        

        <StatusBar style="auto" />
      </View>
    );
  }
}

//TYYLITTELYT

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  textii: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default App;
