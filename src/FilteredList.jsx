import { useCallback, useMemo, useState } from "react";

const initialUsers = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Maks" },
  { id: 4, name: "Alica" },
];

export default function FilteredList() {
  console.log("🔁 FilteredList render");

  const [users, setUsers] = useState(initialUsers);
  const [query, setQuery] = useState("");

  const filteredUsers = useMemo(() => {
    console.log("🧠 useMemo: фильтрация считается заново");

    const q = query.trim().toLowerCase();
    if (!q) return users;

    return users.filter((u) => u.name.toLowerCase().includes(q));
  }, [users, query]);


  const addUser = useCallback(() => {
    console.log("✅ useCallback: addUser called");

    const id = Date.now();
    const name = `User${users.length + 1}`;

    setUsers((prev) => [...prev, { id, name }]);
  }, [users.length]);

  return (
    <div style={{ border: "1px solid #ccc", padding: 16, borderRadius: 12 }}>
      <h2>FilteredList</h2>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Фильтр по имени..."
        style={{ padding: 10, width: "100%", marginBottom: 12 }}
      />

      <button onClick={addUser} style={{ padding: "10px 12px" }}>
        Добавить пользователя
      </button>

      <ul style={{ marginTop: 12 }}>
        {filteredUsers.map((u) => (
          <li key={u.id}>
            {u.id} — {u.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
