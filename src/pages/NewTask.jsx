import React, { useState } from "react";
import arrowleft from "../assets/Icons/arrow_left.png";
import Button from "../components/Button";

const NewTask = ({ baseURL }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");

  const createTask = async (task) => {
    const response = await fetch(`${baseURL} /tasks/create`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center gap-2 py-5">
        <img src={arrowleft} alt="" />
        <h1 className="m-0">New Task</h1>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form Submitted");
          const formData = { title, description, tag };
          console.log(formData);
          createTask(formData);
        }}
        className="w-100 d-flex flex-column gap-5"
      >
        <div className="border rounded-2 py-3  position-relative">
          <label
            className="position-absolute bg-white px-1 text-secondary "
            htmlFor="title"
          >
            Task Title
          </label>

          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="border-0 w-100 px-3"
            type="text"
            id="title"
            placeholder="E.g Project Defense, Assignment..."
          />
        </div>

        <div className="border rounded-2 py-3  position-relative">
          <label
            className="position-absolute bg-white px-1 text-secondary "
            htmlFor="desription"
          >
            Description
          </label>
          <textarea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="border-0 w-100 px-3"
            name=""
            id="description"
            cols="30"
            rows="5"
            placeholder="Briefly describe your task"
          ></textarea>
        </div>

        <div className="border rounded-2 py-3  position-relative">
          <label
            className="position-absolute bg-white px-1 text-secondary "
            htmlFor="tags"
          >
            Tags
          </label>
          <input
            onChange={(e) => {
              setTag(e.target.value);
            }}
            className="border-0 w-100 px-3"
            type="text"
            id="tags"
            placeholder="Urgent Important"
          />
        </div>
        <Button />
      </form>
      <p className="py-5 text-main-color fw-semibold fs-5 text-decoration-underline">
        Back To Top
      </p>
    </div>
  );
};

export default NewTask;
