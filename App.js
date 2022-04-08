
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import * as Location from 'expo-location';
import WeatherInfo from './components/WeatherInfo';
import { colors } from './utils/index';
import UnitsPicker from './components/UnitsPicker';
import ReloadIcon from './components/ReloadIcon';

const { BACKGROUND_COLOR, PRIMARY_COLOR } = colors;
const WEATHER_API  = '1c636e73bec615710535d43a20e161c2';
const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
export default function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [unitsSystem, setUnitSystem] = useState('metric');

  useEffect(async() => {
    load()
  }, [unitsSystem]);

  async function load() {
    setCurrentWeather(null);
    setErrorMessage(null);

    try {
      let { status } = await Location.requestBackgroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMessage('Access to location is required to run this app.');
        return
      }

      const location = await Location.getCurrentPositionAsync({});
      const {latitude, longitude} = location.coords;
      const weatherUrl = `${BASE_WEATHER_URL}?lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API}`;
      const response = await fetch(weatherUrl);
      const result = await response.json();

      if(response.ok) {
        setCurrentWeather(result);
      } else {
        setErrorMessage(result.message);
      }
    } catch(err) {
      console.error(err);
    }
  }
  if (currentWeather){
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <ReloadIcon load={load} />
          <WeatherInfo currentWeather={currentWeather} />
        </View>
        <View style={styles.unitsPicker}>
          <UnitsPicker unitsSystem={unitsSystem} setUnitSystem={setUnitSystem} />
        </View>
      </View>
    );
  } else if (errorMessage) {
    return (
      <View style={styles.container}>
        <Text>{errorMessage}</Text>
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color={PRIMARY_COLOR}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    justifyContent: 'center',
	},

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  unitsPicker: {
    position: 'absolute',
    top: '0%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    width: '50%',
  }
});
