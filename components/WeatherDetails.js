import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../utils/index'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

const { BORDER_COLOR, BACKGROUND_COLOR  } = colors

export default function WeatherDetails({ currentWeather }) {

  const {
    main: {feels_like, humidity, temp_min, temp_max}
  } = currentWeather

  return (
    <View style={styles.weatherContainer}>
      <View style={styles.weatherRow}>
        <Text style={styles.weatherTexto}>
          <FontAwesome5 name="temperature-low" size={25} color="black" />
          L: {temp_min.toFixed(0)}°
        </Text>
        <Text style={styles.weatherTexto}>
          <FontAwesome5 name="temperature-high" size={25} color="black" />
          H: {temp_max.toFixed(0)}°
        </Text>
      </View>
      <View style={{...styles.weatherRow }}>
        <Text style={styles.weatherTexto}>
          <MaterialCommunityIcons name="hand-water" size={24} color="black" />
          Feels like: {feels_like.toFixed(0)}°
        </Text>
        <Text style={styles.weatherTexto}>
          <FontAwesome5 name="smog" size={24} color="black" />
          Humidity: {humidity}%
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  weatherContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#F8F8F8',
    height: '22%',
    bottom: '5%',
    width: '90%',
    marginHorizontal: '5%',
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 10,
    padding: 10,

  },

  weatherRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#090909',
    backgroundColor: '#dbd5c8',
    opacity: 0.7,
    padding: 27,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },

  weatherTexto: {
    color: '#000',
    fontSize: 16,
  }
})