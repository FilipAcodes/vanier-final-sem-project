"use client";
import React, { useState } from "react";
import "./modal.css";

const Modal = ({ isOpen, onClose, selectedTask, onUpdate, reFetch }) => {
  const [editedTask, setEditedTask] = useState(selectedTask?.[1] || "");

  const handleEdit = () => {
    onUpdate(selectedTask[0], editedTask);
    reFetch();
    onClose();
  };

  const modalClassName = isOpen ? "modal modal-open" : "modal";

  return (
    <>
      {isOpen && (
        <div className={modalClassName}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>Edit Task</h2>
              <button className="close-btn" onClick={onClose}>
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
