import React, { useState, useAlku } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  TextInput,
  FlatList,
} from "react-native";

export default function Calculator() {
  const [result, setResult] = useState("");
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [data, setData] = useState([]);

  const Alkutila = useAlku(null);

  const calculate = (opertator) => {
    console.log(numero1, numero2, opertator);
    const [numb1, numb2] = [Number(numero1), Number(numero2)];

    if (isNaN(numb1) || isNaN(numb2)) {
      setResult(0);
    } else {
      let result = 0;
      switch (opertator) {
        case "+":
          result = numb1 + numb2;
          break;
        case "-":
          result = numb1 - numb2;
          break;
      }
      setResult(result);

      const text = "${numb1} ${operator} ${numb2} = ${result}";
      setData([...data, { key: text }]);
    }

    setNumero1("");
    setNumero2("");
    Alkutila.current.focus();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Reslut: {result}</Text>
      <TextInput
        style={styles.input}
        ref={Alkutila}
        keyboardType={"numeric"}
        onChangeText={(text) => setNumero1(text)}
        value={numero1}
      />
      <TextInput
        style={styles.input}
        ref={Alkutila}
        keyboardType={"numeric"}
        onChangeText={(text) => setNumero2(text)}
        value={numero2}
      />
      <View style={styles.buttonit}>
        <Button
          ButtonStyle={styles.button}
          onPress={() => calculate("+")}
          title="+"
        />
        <Button
          ButtonStyle={styles.button}
          onPress={() => calculate("-")}
          title="-"
        />
      </View>
      <Text style={styles.head}>History</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  head: {
    fontSize: 20,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    margin: 5,
    width: "50%",
  },
  buttonit: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    padding: 5,
    margin: 5,
  },
});
