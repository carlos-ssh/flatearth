import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { Picker } from '@react-native-community/picker'

export default function UnitsPicker({ unitsSystem, setUnitSystem }) {
  return (
    <View>
      <Picker
        selectedValue={unitsSystem}
        onValueChange={(item) => setUnitSystem(item)}
        mode={Platform.OS === 'ios' ? 'dialog' : 'dropdown'}
        itemStyle={{}}
      >
        <Picker.Item
          label="°C"
          value="metric"
        />
        <Picker.Item
          label="°F"
          value="imperial"
        />
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      picker: {
        height: 50,
        width: 100,
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
      },
    },
    android: {
      picker: {
        height: 50,
        width: 100,
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
      },
    },
  }),
})