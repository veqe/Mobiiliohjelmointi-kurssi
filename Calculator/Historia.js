import React from 'react'
import {
    StyleSheet,
    View,
    Button,
    Text,
    TextInput,
    FlatList,
} from 'react-native'

export default function CalcHistory({ route }) {
    const { historia } = route.params
    return (
        <View style={styles.container}>
            <View style={styles.flatcont}>
                <FlatList
                    data={historia}
                    ListHeaderComponent={
                        <Text style={styles.listHead}>Historia</Text>
                    }
                    renderItem={({ item }) => <Text>{item.text}</Text>}
                ></FlatList>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flatcont: {
        height: '50%',
    },
    listHead: {
        fontSize: 25,
    },
})
