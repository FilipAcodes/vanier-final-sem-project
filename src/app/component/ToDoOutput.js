"use client";
import React, { useState, useEffect } from "react";
import "./inputCss.css";
import Modal from "./modal";

const ToDoOutput = ({ data, setData }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    fetch(`/api/getTask`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data || []);
      })
      .catch((error) => console.error("Error fetching tasks:", error));
  };
  const onClose = () => {
    setIsModalOpen(false);
  };
  const deleteTask = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (!confirmed) return;

    fetch(`/api/deleteTask/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          fetchTasks();
        } else {
          console.error("Error deleting task:", data.error);
        }
      })
      .catch((error) => console.error("Error deleting task:", error));
  };

  const updateTask = (id, taskDescription) => {
    fetch(`/api/updateTask`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, task: taskDescription }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          fetchTasks();
        } else {
          console.error("Error updating task:", data.error);
        }
      })
      .catch((error) => console.error("Error updating task:", error));
  };

  const handleEditTask = (id) => {
    const selected = data.find((task) => task[0] === id);
    setSelectedTask(selected);
    setIsModalOpen(true);
  };

  return (
    <div className="inputContainer">
      {data.map((task) => (
        <div className="listData" key={task[0]}>
          <ul className="task">{task[1]}</ul>
          <button className="editBtn" onClick={() => handleEditTask(task[0])}>
            Edit
          </button>
          <button className="deleteBtn" onClick={() => deleteTask(task[0])}>
            &times;
          </button>
        </div>
      ))}
      <Modal
        isOpen={isModalOpen}
        reFetch={fetchTasks}
        onClose={onClose}
        selectedTask={selectedTask}
        onUpdate={updateTask}
        setData={setData}
      />
    </div>
  );
};

export default ToDoOutput;
