import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput, FlatList } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { numero1: 0, numero2: 0, tulos: ' ', };

    //const item = [text, setText] = useState('');
    //const data = [data, setData] = useState([]);
  }

  setText(numero1) {
    this.setState({ numero1: Number(numero1) });    
  }

  setText2(numero2) {
    this.setState({ numero2: Number(numero2) });    
  }

  buttonPressed = (isPlus) => {

    //setData([...data, {key: tulos}]);
    

    const { numero1, numero2 } = this.state;
    if (isPlus) {
      this.setState({ tulos: numero1 + numero2 });
    } else {
      this.setState({ tulos: numero1 - numero2 });
    }
  };

  render() {
    const { numero1, numero2, tulos, historia } = this.state;
    return (
      <View style={styles.container}>
        <Text>Result: {tulos}</Text>
        <View style={styles.textii}>
          <TextInput
            keyboardType={"Numeric"}
            style={{ width: 200, borderColor: "black", borderWidth: 2 }}
            onChangeText={(numero1) => this.setText(numero1)}
            value={`${numero1}`}
          />  
           <TextInput
            keyboardType={"Numeric"}
            style={{ width: 200, borderColor: "black", borderWidth: 2 }}
            onChangeText={(numero2) => this.setText2(numero2)}
            value={`${numero2}`}
          />                  
        </View>
        <View style={styles.btn}>
          <Button title="+" onPress={(isPlus) => this.buttonPressed(true)} />
          <Button title="--" onPress={(isPlus) => this.buttonPressed(false)} />
        </View>

        {/* <View style={styles.faltspace}>
        <FlatList 
        data={data}
        renderItem={({tulos}) =>
        <Text>{tulos.key}</Text>}        
        />
        </View> */}
      
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
  faltspace:{

  },
});

export default App;
