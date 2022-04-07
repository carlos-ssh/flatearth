import React from 'react'
import { View, Platform, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function ReloadIcon({ refreshing, setRefreshing }) {
  const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh'

  return (
    <View>
      <Ionicons
        style={styles.ReloadIcon}
        name={reloadIconName}
        size={34}
        color="#000"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  ReloadIcon: {
    position: 'absolute',
    right: '45%',
    left: '45%',
    zIndex: 1,
  },
})
