import { useState } from "react";

const USERNAME_KEY = "__submit_username";

export default function useName(title) {
  const defaultName = localStorage.getItem(USERNAME_KEY + title);

  const [name, setName] = useState(defaultName || "");

  return [
    name,
    setName,
    (newName) => localStorage.setItem(USERNAME_KEY + title, newName),
  ];
}
