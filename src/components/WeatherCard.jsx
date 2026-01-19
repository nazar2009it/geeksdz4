import styles from "./WeatherCard.module.css";

export default function WeatherCard({ city, data }) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.city}>{city}</div>
        <div className={styles.icon} aria-hidden="true">
          {data.icon}
        </div>
      </div>

      <div className={styles.temp}>{data.temp}°C</div>
      <div className={styles.desc}>{data.description}</div>
    </div>
  );
}
