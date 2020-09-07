import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput, FlatList, Dimensions } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { numero1: 0, numero2: 0, tulos: ' ', flatlisttavarat: [{id: 0, item: 'History',}] };

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
    

    const { numero1, numero2, flatlisttavarat } = this.state;
    if (isPlus) {
      const yhteensa = (numero1 + numero2);
      const uudettavarat = flatlisttavarat;
      
      uudettavarat.push({id: 2, item: (numero1 + ' + ' + numero2 + ' = ' + yhteensa)});
      //console.log(uudettavarat);
      this.setState({ tulos: yhteensa, flatlisttavarat: uudettavarat});
      //console.log(flatlisttavarat);

    } else {

      const yhteensa = (numero1 - numero2);
      const uudettavarat = flatlisttavarat;
      
      uudettavarat.push({id: 3, item: (numero1 + ' - ' + numero2 + ' = ' + yhteensa)});
      //console.log(uudettavarat2);
      this.setState({ tulos: yhteensa, flatlisttavarat: uudettavarat});
      //console.log(flatlisttavarat);

    }
  };

  renderItemz = (flatlisttavara) => {   
  //console.log(flatlisttavara);
    return <Text>{flatlisttavara.item.item}</Text>;
  }

  render() {
    const { numero1, numero2, tulos, flatlisttavarat } = this.state;
  //console.log(flatlisttavarat)
    //const flatlisttavarat = [{id: 0, item: "kivaa"},{id: 1, item: "jotai"}]
    //const dimensions = Dimensions.get('window');     
    //const screenWidth = dimensions.width;

    return (
      <View style={styles.container}>
        <Text>Result: {tulos}</Text>
        <View style={styles.textii}>
          <TextInput
            style={styles.textii}
            onChangeText={(numero1) => this.setText(numero1)}
            value={`${numero1}`}
          />  
           <TextInput
            style={styles.textii}
            onChangeText={(numero2) => this.setText2(numero2)}
            value={`${numero2}`}
          />                  
        </View>
        <View style={styles.btn}>
          <Button title="+" onPress={(isPlus) => this.buttonPressed(true)} />
          <Button title="--" onPress={(isPlus) => this.buttonPressed(false)} />
        </View>

        
        <FlatList style={{flex: 1}}
        data={flatlisttavarat}
        renderItem={this.renderItemz}
        keyExtractor={(item, index)=> index.toString()}
       
        />
        
      
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
    borderWidth: 2,
  },
  textii: {
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 2,
  },
  faltspace: {
    flex: 1,
    borderWidth: 1,
    
  },
});

export default App;
