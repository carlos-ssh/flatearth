import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { colors } from '../utils/index'
import UnitsPicker from './UnitsPicker';

const {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  BORDER_COLOR,
  BACKGROUND_COLOR
} = colors

export default function WeatherInfo({currentWeather}) {
  const {
    main: {temp},
    weather: [details],
    name
  } = currentWeather
  const {icon, description} = details
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
  return (
    <View style={styles.weatherInfo}>
      <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
      <Text style={styles.temp}>{temp.toFixed(1)}°</Text>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.descriptionText}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },

  weatherIcon: {
    width: 100,
    height: 100,
  },

  text: {
    fontSize: 20,
  },

  temp: {
    fontSize: 45,
    marginTop: 10,
  }
})