import { useEffect, useMemo, useState } from "react";
import { weatherData } from "./data/weatherData";
import { debounce } from "./utils/debounce";
import WeatherCard from "./components/WeatherCard";
import styles from "./App.module.css";

export default function App() {
  const [cityInput, setCityInput] = useState("");
  const [foundCity, setFoundCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");


  const searchCity = (value) => {
    const q = value.trim();
    if (!q) {
      setWeather(null);
      setFoundCity("");
      setError("");
      return;
    }


    const key = Object.keys(weatherData).find(
      (k) => k.toLowerCase() === q.toLowerCase()
    );

    if (!key) {
      setWeather(null);
      setFoundCity("");
      setError("Город не найден");
      return;
    }

    setWeather(weatherData[key]);
    setFoundCity(key);
    setError("");
  };


  const debouncedSearch = useMemo(() => debounce(searchCity, 450), []);

  useEffect(() => {
    debouncedSearch(cityInput);
  }, [cityInput, debouncedSearch]);

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <h1 className={styles.title}>Погода</h1>

        <label className={styles.label}>
          Введите город (London, Paris, Tokyo, Toronto)
        </label>

        <input
          className={styles.input}
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          placeholder="Например: Tokyo"
        />

        {error && <div className={styles.error}>{error}</div>}

        {weather && <WeatherCard city={foundCity} data={weather} />}
      </div>
    </div>
  );
}
