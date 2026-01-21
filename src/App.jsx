import { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!form.name) newErrors.name = "Имя обязательно";
    if (!form.email) newErrors.email = "Email обязателен";
    if (!form.password) newErrors.password = "Пароль обязателен";
    if (!form.confirmPassword)
      newErrors.confirmPassword = "Подтвердите пароль";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Регистрация успешна", form);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <h2>Регистрация</h2>

      <input
        name="name"
        placeholder="Имя"
        value={form.name}
        onChange={handleChange}
      />
      {errors.name && <p>{errors.name}</p>}

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}

      <input
        type="password"
        name="password"
        placeholder="Пароль"
        value={form.password}
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}

      <input
        type="password"
        name="confirmPassword"
        placeholder="Подтвердите пароль"
        value={form.confirmPassword}
        onChange={handleChange}
      />
      {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}
