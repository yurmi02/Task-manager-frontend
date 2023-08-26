import React, { useEffect, useState } from "react";
import arrowleft from "../assets/icons/arrow_left.png";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";

const EditTask = ({baseURL}) => {
  const { id } = useParams();
  const [task, setTask] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    console.log(id);

    const getData = async () => {
      const res = await fetch(`${baseURL} /tasks/${id}`);
      const data = await res.json();
      console.log(data.task);
      setTask(data.task);
    };

    getData();
  }, []);

  const updateTask = async () => {
    const res = await fetch(`${baseURL} /tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center gap-2 py-5">
        <img src={arrowleft} alt="" />
        <h1 className="m-0">Edit Task</h1>
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          updateTask();
          setTimeout(()=>{
            navigate("/my-task");
          }, 2000);
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
            onChange={(event) => {
              setTask({ ...task, title: event.target.value });
            }}
            className="border-0 w-100 px-3"
            type="text"
            id="title"
            value={task.title}
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
            onChange={(event) => {
              setTask({ ...task, description: event.target.value });
            }}
            className="border-0 w-100 px-3"
            name=""
            id="description"
            cols="30"
            rows="5"
            value={task.description}
            placeholder="Briefly describe your task"
          ></textarea>
        </div>

        <div className="border rounded-2 py-3  position-relative">
          <label
            className="position-absolute bg-white px-1 text-secondary "
            htmlFor="tagg"
          >
            Tags
          </label>
          <input
            onChange={(event) => {
              setTask({ ...task, tag: event.target.value });
            }}
            className="border-0 w-100 px-3"
            type="text"
            id="tags"
            value={task.tag}
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

export default EditTask;
