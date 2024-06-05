"use client";
import { useState } from "react";
import "./inputCss.css";

const InputTask = () => {
  const [userInput, setUserInput] = useState("");

  const onChange = (e) => {
    setUserInput(e.target.value);
  };

  const submitBtn = async () => {
    if (!userInput.trim()) return;

    try {
      const response = await fetch("/api/createTask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task: userInput }),
      });

      if (response.ok) {
        setUserInput("");
      } else {
        console.error("Error adding task:", await response.json());
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submitBtn();
  };

  return (
    <div className="largerInputCont">
      <form className="inputContainer" onSubmit={onSubmit}>
        <label htmlFor="input">Insert a todo</label>
        <input type="text" value={userInput} id="input" onChange={onChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default InputTask;
