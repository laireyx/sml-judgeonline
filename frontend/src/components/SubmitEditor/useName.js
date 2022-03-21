import { useState } from "react";

const USERNAME_KEY = "__submit_username";

export default function useName() {
  const defaultName = localStorage.getItem(USERNAME_KEY);

  const [name, setName] = useState(defaultName || "");

  return [
    name,
    setName,
    (newName) => {
      console.log(newName);
      localStorage.setItem(USERNAME_KEY, newName);
    },
  ];
}
