"use client";
import React, { useState } from "react";
import "./modal.css";

const Modal = ({ isOpen, onClose, selectedTask, onUpdate, reFetch }) => {
  const [editedTask, setEditedTask] = useState(selectedTask?.[1] || "");

  const handleEdit = () => {
    onUpdate(selectedTask[0], editedTask);
    fetchData();
    setEditedTask("");
    onClose();
  };
  const fetchData = async () => {
    reFetch();
  };

  const closeModal = () => {
    setEditedTask("");
    onClose();
  };

  const modalClassName = isOpen ? "modal modal-open" : "modal";

  return (
    <>
      {isOpen && (
        <div className={modalClassName}>
          <div className="modal-content">
            <div className="modal-header">
              <h1>Edit Task</h1>
              <button className="close-btn" onClick={closeModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
              />
              <button className="edit-task-btn" onClick={handleEdit}>
                Edit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
