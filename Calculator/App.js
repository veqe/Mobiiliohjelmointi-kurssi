import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Calculator from './Calculator'
import CalcHistory from './Historia'

const Stack = createStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Calculator" component={Calculator} />
                <Stack.Screen name="Historia" component={CalcHistory} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
