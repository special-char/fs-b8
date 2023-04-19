import React, { useState } from 'react'
import Input from './components/Input'
import Button from './components/Button'

const weatherData = {
  pune: {
    temperature: '72°F',
    condition: 'Sunny',
    icon: 'sun',
  },
  delhi: {
    temperature: '68°F',
    condition: 'Partly Cloudy',
    icon: 'cloud-sun',
  },
  disa: {
    temperature: '60°F',
    condition: 'Rain',
    icon: 'cloud-rain',
  },
}

const WeatherApp = () => {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    if (city in weatherData) {
      setWeather(weatherData[city])
    } else {
      setWeather(null)
    }
  }

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <Button type="submit" text="Get Weather"></Button>
      </form>
      {weather ? (
        <div>
          <h2>{city}</h2>
          <p>Temperature: {weather.temperature}</p>
          <p>Condition: {weather.condition}</p>

          {weather.icon === 'sun' && <i className="fas fa-sun"></i>}
          {weather.icon === 'cloud-sun' && <i className="fas fa-cloud-sun"></i>}
          {weather.icon === 'cloud-rain' && (
            <i className="fas fa-cloud-rain"></i>
          )}
        </div>
      ) : (
        <p>No data available for the entered city.</p>
      )}
    </div>
  )
}

export default WeatherApp
