import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput, FlatList, Dimensions } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tavara: '', kauppatavarat: [] };
  }
/** @author Veqe
 * Tallennetaan teksti
 * @param {tavara} tavara 
 */
  setText(tavara) {
    this.setState({ tavara: tavara });    
  }

  /**
   * Lisätään kauppa
   */
  lisaatavara = () => {
    const { tavara, kauppatavarat } = this.state;    
      const uudettavarat = kauppatavarat;      
      uudettavarat.push({id: 2, item: tavara});      
      this.setState({ kauppatavarat: uudettavarat, tavara: '',});      
  };

  tyhjenna = () => {
    this.setState({ kauppatavarat: []});
  }
/**
 * renderi
 * @param {} flatlisttavara 
 */
  _rendertavara = (flatlisttavara) => {   
    return <Text>{flatlisttavara.item.item}</Text>;
  }

  render() {
    const { tavara, kauppatavarat } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.textii}>
          <TextInput
            style={styles.textii}
            onChangeText={(tavara) => this.setText(tavara)}
            value={`${tavara}`}
          />  
        </View>
        <View style={styles.btn}>
          <Button title="ADD" onPress={this.lisaatavara} />
          <Button title="CLEAR" onPress={this.tyhjenna}/>
        </View>
        <Text style={styles.titteli}>Shopping List: </Text>
        <FlatList style={{flex: 1}}
          data={kauppatavarat}
          renderItem={this._rendertavara}
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
    flexDirection: 'row',
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
  titteli: {
     fontSize: 20,
     fontWeight: 'bold',
     color: 'green',     
  }
});
export default App;
