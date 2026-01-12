import UserCard from "./UserCard";

export default function UserList() {
  const users = [
    {
      id: 1,
      name: "Alex",
      age: 21,
      city: "Bishkek",
      active: true,
      disable: false,
      img: "https://i.pravatar.cc/200?img=12",
    },
    {
      id: 2,
      name: "Maria",
      age: 19,
      city: "Osh",
      active: false,
      disable: false,
      img: "https://i.pravatar.cc/200?img=32",
    },
    {
      id: 3,
      name: "John",
      age: 25,
      city: "Almaty",
      active: true,
      disable: true,
      img: "https://i.pravatar.cc/200?img=5",
    },
  ];

  return (
    <div className="list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
