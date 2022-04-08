import React from 'react'
import { View, Platform, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function ReloadIcon({ load }) {
  const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh'

  return (
    <View style={styles.ReloadIcon}>
      <Ionicons
        onPress={load}
        name={reloadIconName}
        size={30}
        color="#000"
        style={styles.Icon}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  ReloadIcon: {
    position: 'absolute',
    top: 80,
    right: 30,
    backgroundColor: '#f8f8f8',
    borderRadius: 50,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
})
