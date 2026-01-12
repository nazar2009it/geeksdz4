import "./user.css";

export default function UserCard({ user }) {
  // условный рендеринг
  if (user.disable === true) {
    return (
      <div className="card card--disabled">
        <div className="card__disabledText">Пользователь отключён</div>
      </div>
    );
  }

  return (
    <div className={`card ${user.active ? "card--active" : "card--inactive"}`}>
      <img className="card__img" src={user.img} alt={user.name} />

      <div className="card__body">
        <h3 className="card__title">{user.name}</h3>

        <p className="card__text">
          <b>Возраст:</b> {user.age}
        </p>
        <p className="card__text">
          <b>Город:</b> {user.city}
        </p>

        <span className={`badge ${user.active ? "badge--on" : "badge--off"}`}>
          {user.active ? "Active" : "Inactive"}
        </span>
      </div>
    </div>
  );
}
